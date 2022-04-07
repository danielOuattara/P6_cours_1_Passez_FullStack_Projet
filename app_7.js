// route GET + CORS resolu !

const express = require("express"); // importe 'express'

const app = express(); //  cree une application express

app.use((req, res, next) => {  //
    res.setHeader('Access-Control-Allow-Origin', '*'); // permet à l'application d'accéder à l'API sans problème depuis n'importe quelle origine.
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');  // permet à l'application d'accéder à l'API sans problème depuis n'importe quelle origine.
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');  // envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.)
    next();
});

app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 4900,
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];

  res.status(200).json(stuff);
});

module.exports = app; //  rend 'app' accessible depuis les autres fichiers du projet
