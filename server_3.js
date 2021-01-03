const http = require('http');  // importer le package de serveur http de Node.js. L'objet 'http' permet de créer un serveur.
const app = require ('./app_3.js');

app.set('port', 3005 || process.env.PORT); 
const server = http.createServer(app);

server.listen( 3005 || process.env.PORT);  // écouter les requêtes envoyées
 

/* 
Le seveur Node.js retourne bien l'application express
*/