
const Thing = require('../../models/Thing.js')

//--------------------------------------------------------------------------------------
exports.createThing = (req, res, next) => { 
    const thingObject = JSON.parse( req.body.thing);
    delete thingObject._id;
    console.log(req.file)
    const thing = new Thing(
      {
        ...thingObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      }
    );
    thing.save()
        .then(() => res.status(201).json({message: 'Objet Bien Enregistré !'}))
        .catch( error => res.status(400).json({error}));
} 

//--------------------------------------------------------------------------------------
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


//--------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------
// exports.updateThing = (req, res, next) => { 
//   Thing.findOne({_id: req.params.id})
//   .then((item) => {
//     if(!item) {
//       return res.status(404).send('Item not found!')
//     }
//     if(item.userId !== req.auth.userId) {
//       return res.status(401).send('Request Non Authorized ')
//     }

//     const thingObject = req.file ? 
//       {
//         ...JSON.parse(req.body.thing), //si update d'image dans cet update
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//       } 
//       :
//       {...req.body } // si pas d'update image dans cette update
//     console.log("thingObject = ", thingObject)
//     item.updateOne( {...thingObject, _id: req.params.id})
//     .then( () => res.status(201).json( {message: 'Update Successfull !'}))
//     .catch( error => res.status(500).json({error}));
//   })
//   .catch( error => res.status(500).json({error})); 
// }

//----------------------------------------------------------------------
exports.updateThing = async (req, res) => {
  try {
    const thing = await Thing.findOne({_id: req.params.id})
    if(!thing) {
      return res.status(404).send('Item not found!')
    }
    if(thing.userId !== req.auth.userId) {
      return res.status(401).send('Request Non Authorized ')
    } 
    
    const thingObject = req.file ? 
      {
        ...JSON.parse(req.body.thing), //si update d'image dans cet update
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } 
      :
      {...req.body } // si pas d'update image dans cette update

    await thing.updateOne({...thingObject, _id: req.params.id});
    res.status(201).json( {message: 'Update Successfull !'})

  } catch (error) { 
    res.status(500).send(error.message)
  }
}

//-----------------------------------------------------------------------------
exports.getOneThing = (req, res, next) => {
  Thing.findOne ({ _id: req.params.id})
  .then( thing =>  res.status(200).json(thing))
  .catch( error => res.status(404).json({error}))
}

//-----------------------------------------------------------------------------
exports.getAllThing = (req, res, next) => {
  Thing.find()
  .then( things => res.status(200).json(things))
  .catch( error => res.status(400).json({error}));
}