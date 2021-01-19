const express = require('express');
const router  = express.Router();
const Thing   = require('../../models/Thing.js');



//
//-----------------------------------------------------
router.post('/', (req, res, next) => { 
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({message: 'Objet Bien Enregistré !'}))
        .catch( error => res.status(400).json({error}));
});




// ajout route DELETE pour supprimer un l'objet:
//-----------------------------------------------
router.delete('/:id', (req, res, next) => { 
  Thing.deleteOne({_id: req.params.id})
  .then( () => res.status(200).json( {message: 'Suppression Réussie !'}))
  .catch( error => res.status(400).json({error}));
});




// ajout route PUT pour la modification de l'objet:
//-----------------------------------------------
router.put('/:id', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id})
    .then( () => res.status(200).json( {message: 'Modification Réussie !'}))
    .catch( error => res.status(400).json({error}));
});



//
//--------------------------------------------------
router.get('/:id', (req, res, next) => {
  // req.params.id  // access à :
  Thing.findOne ({ _id: req.params.id})
    .then( thing =>  res.status(200).json(thing))
    .catch( error => res.status(404).json({error}))
});



//
//----------------------------------------------------
router.get('/', (req, res, next) => {
    Thing.find()
        .then( things => res.status(200).json(things))
        .catch( error => res.status(400).json({error}));
});


module.exports = router;  //  rendre 'router' accessible depuis les autres fichiers du projet