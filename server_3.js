const http = require("http"); // importer le package de serveur http de Node.js. L'objet 'http' permet de créer un serveur.
const app = require("./app_3.js");

app.set("port", process.env.PORT || 3300);

const server = http.createServer(app);

server.listen(process.env.PORT || 3300); // écouter les requêtes envoyées

/* Le seveur Node.js retourne bien l'application express  */
