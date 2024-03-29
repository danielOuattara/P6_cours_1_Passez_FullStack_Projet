// P2C3: Enregistrer er récuperer des données

require("dotenv").config();
const express = require("express"); // importe 'express'
const bodyParser = require("body-parser");
const app = express(); //  cree une application express
const mongoose = require("mongoose"); // importe Mongoose
const Thing = require("./models/Thing.js");
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization" );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS" );
  next();
});

app.use(bodyParser.json());

app.post("/api/stuff", (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "Objet Bien Enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});

// ajout route DELETE pour supprimer un l'objet:
//-----------------------------------------------
app.delete("/api/stuff/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Suppression Réussie !" }))
    .catch((error) => res.status(400).json({ error }));
});

// ajout route PUT pour la modification de l'objet:
//-----------------------------------------------
app.put("/api/stuff/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Modification Réussie !" }))
    .catch((error) => res.status(400).json({ error }));
});

//--------------------------------------------------
app.get("/api/stuff/:id", (req, res, next) => {
  // req.params.id  // access à :
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

//----------------------------------------------------
app.get("/api/stuff", (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = app; //  rend 'app' accessible depuis les autres fichiers du projet
