const express = require("express");
const router = express.Router();
const stuffController = require("./../controllers/stuffController.js");

router.post("/", stuffController.createThing);
router.delete("/:id", stuffController.deleteThing);
router.put("/:id", stuffController.updateThing);
router.get("/:id", stuffController.getOneThing);
router.get("/", stuffController.getAllThing);

module.exports = router; //  rendre 'router' accessible depuis les autres fichiers du projet
