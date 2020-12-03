const express = require ('express');  // importe 'express'

const app = express(); //  cree une application express

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

