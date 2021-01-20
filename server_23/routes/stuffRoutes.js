const express         = require('express');
const router          = express.Router();
const auth            = require('../middleware/auth.js');
const stuffController = require('../controllers/stuffController.js')
const multer          = require('./../middleware/multer-config.js')


router.post('/',      auth, multer, stuffController.createThing );
router.delete('/:id', auth,         stuffController.deleteThing );
router.put('/:id',    auth,         stuffController.updateThing );
router.get('/:id',    auth,         stuffController.getOneThing);
router.get('/',       auth,         stuffController.getAllThing);

module.exports = router;  //  rendre 'router' accessible depuis les autres fichiers du projet