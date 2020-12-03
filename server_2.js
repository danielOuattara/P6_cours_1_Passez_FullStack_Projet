const http = require('http');  // importer le package de serveur http de Node.js. L'objet 'http' permet de créer un serveur.
const app = require ('./app');


app.set('port', 3005 || process.env.PORT);

const server = http.createServer((req, res) => {
    res.end('Ici la reponse serveur')
});


server.listen( 3005 || process.env.PORT);  // écouter les requêtes envoyées
