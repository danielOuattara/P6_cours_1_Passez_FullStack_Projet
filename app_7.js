const express = require ('express');  // importe 'express'

const app = express(); //  cree une application express

app.use((req, res, next) => {  //  
    res.setHeader('Access-Control-Allow-Origin', '*'); // permet à l'application d'accéder à l'API sans problème depuis n'importe quelle origine.
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');  // permet à l'application d'accéder à l'API sans problème depuis n'importe quelle origine.
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');  // envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.)
    next();
});


app.use('/api/stuff', (req, res, next) => {

    const stuff = [
        {
            _id:'1234',
            title: 'book',
            description: '', 
            imageUrl: '',
            price: 2900,
            userId: ''
        },
        {
            _id:'1235',
            title: 'chair',
            description: '',
            imageUrl: '',
            price: 1500,
            userId: ''
        },
        {
            _id:'1236',
            title: 'bicycle',
            description: '',
            imageUrl: '',
            price: 15000,
            userId: ''
        }
    ]; 

    res.status(200).json(stuff);

});

module.exports = app;  //  rend 'app' accessible depuis les autres fichiers du projet

