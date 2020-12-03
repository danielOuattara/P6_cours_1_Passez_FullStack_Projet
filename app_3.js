const express = require ('express');  // importe 'express'

const app = express(); //  cree une application express

app.use((req, res) => {  // configuration réponse simple
    res.json( { message: 'Requête reçue !'});
});

module.exports = app;  //  rend 'app' accessible depuis les autres fichiers du projet