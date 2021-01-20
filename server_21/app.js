
// P2C4: Completons le CRUD: ajoutons modification & suppression

const express     = require('express');  // importe 'express'
const bodyParser  = require('body-parser');

const app         = express(); //  cree une application express
const mongoose    = require('mongoose'); // importe Mongoose

const stuffRoutes = require('./routes/stuffRoutes.js')
const userRoutes  = require('./routes/userRoutes.js')


mongoose.connect('mongodb+srv://gofullstack:XiAtERybkvrKa4tXiAtERybkvrKa4tXiAtERybkvrKa4tXiAtERybkvrKa4t@cluster0.vndw3.mongodb.net/gofullstack?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(bodyParser.json());


app.use('/api/stuff', stuffRoutes)
app.use('/api/auth' , userRoutes)


module.exports = app;  //  rend 'app' accessible depuis les autres fichiers du projet

