//  Option 1
//----------

const http = require('http');  // importer le package de serveur http de Node.js
                               // l'objet 'http' permet de créer un serveur.

// import http from 'http';  // what about that ?

const server = http.createServer((req, res) => {
    res.end('Ici la reponse serveur')
});


server.listen( 3005 || process.env.PORT);  // écouter les requêtes envoyées

//--------------------------------------------------------------------------


//  Option 2
//----------

 import http from 'http';  // what about that ?

const server = http.createServer((req, res) => {
    res.end('Ici la reponse serveur')
});


server.listen( 3005 || process.env.PORT);  // écouter les requêtes envoyées
