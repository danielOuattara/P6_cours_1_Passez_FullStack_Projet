const express = require('express');  // importe 'express'
const bodyParser = require('body-parser');

const app = express(); //  cree une application express


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(bodyParser.json());


app.post('/api/stuff', (req, res, next) => { 
    console.log(req.body);
    res.status(201).json({
        message: 'objet créé'
    });
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

