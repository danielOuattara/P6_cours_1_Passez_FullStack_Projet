
const Thing = require('./../../models/Thing.js')


exports.createThing = (req, res, next) => { 
    delete req.body._id;
    const thing = new Thing({...req.body });
    thing.save()
    .then(() => res.status(201).json({message: 'Objet Bien Enregistré !'}))
    .catch( error => res.status(400).json({error}));
} 

// exports.deleteThing = async (req, res, next) => {
//     try {
//       const thing = await Thing.findOne({_id: req.params.id})
//       if(!thing) {
//         return res.status(404).send('Item not not found!')
//       }
//       if(thing.userId !== req.auth.userId) {
//         return res.status(401).send('Request Non Authorized ')
//       }      
//       await thing.delete();
//       res.status(200).json({message: 'Suppression Réussie !'})
      
//     } catch (error) {
//       res.status(500).json(error.message);
//     } 
// }


exports.deleteThing = (req, res, next) => { 
    Thing.findOne({_id: req.params.id})
    .then((thing) => {
      if(!thing) {
        return res.status(404).send('Item not found!')
      }
      if(thing.userId !== req.auth.userId) {
        return res.status(401).send('Request Non Authorized ')
      }
      thing.delete()
      .then( () => res.status(200).json( {message: 'Suppression Réussie !'}))
      .catch( error => res.status(500).json({error}));
    })
    .catch( error => res.status(500).json({error}));
}


// exports.updateThing = async (req, res) => {
//   try {
//     const thing = await Thing.findOne({_id: req.params.id})
//     if(!thing) {
//       return res.status(404).send('Item not found!')
//     }
//     if(thing.userId !== req.auth.userId) {
//       return res.status(401).send('Request Non Authorized ')
//     }      
//     await thing.updateOne({...req.body, _id: req.params.id});
//     res.status(201).json( {message: 'Update Successfull !'})

//   } catch (error) { 
//   }
// }


exports.updateThing = (req, res, next) => { 
    Thing.findOne({_id: req.params.id})
    .then((thing) => {
      if(!thing) {
        return res.status(404).send('Item not found!')
      }
      if(thing.userId !== req.auth.userId) {
        return res.status(401).send('Request Non Authorized ')
      }
      thing.updateOne({...req.body, _id: req.params.id})
      .then( () => res.status(201).json( {message: 'Update Successfull !'}))
      .catch( error => res.status(500).json({error}));
    })
    .catch( error => res.status(500).json({error})); 
}

exports.getOneThing = (req, res, next) => {
  Thing.findOne ({ _id: req.params.id})
    .then( thing =>  res.status(200).json(thing))
    .catch( error => res.status(404).json({error}))
}

exports.getAllThing = (req, res, next) => {
  Thing.find()
      .then( things => res.status(200).json(things))
      .catch( error => res.status(400).json({error}));
}