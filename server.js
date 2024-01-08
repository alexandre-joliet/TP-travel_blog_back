// Fichier du lancement du serveur
require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();
const Router = require('./app/routers');

// Par défaut notre serveur est fermé à tous les appels d'autres serveurs, le module "cors" nous permet de l'ouvrir aux appels provenant du Front
// const CORSMethods = {
//   origin: 'http://localhost:3000', // Attention l'adresse est "en dure" et peut être problématique suivant l'url ou le port spécifié côté front
//   optionsSuccessStatus: 200 // some legacy browers (IE11, various SmartTVs) choke on 204
// };

app.use(cors());

/**
  La session ne doit être utilisable en ce état malgrés la configuration qui est correcte
 * Les appels au BACK se faisant à partir du serveur FRONT, l'utilisateur n'a pas aucune action directe sur la session côté BACK
 */
// const session = require("express-session");
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: true,
//   saveUninitialized: true
// }));

// Pour pouvoir exploiter le body
app.use(express.json());
app.use(express.urlencoded({
  extended : true
}));

// Indication du chemin des fichiers statiques
app.use(express.static('public'));

// Indication du routage
app.use(Router);

// Lancement du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Our magnificent server has been started at the following address : http://localhost:${PORT}`);
});