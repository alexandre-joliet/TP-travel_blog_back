require("dotenv").config();
const express = require('express');
const cors = require('cors');
const session = require("express-session");

const app = express();
const Router = require('./app/routers');

app.use(cors({
  // TODO: a modifier par l'url du front
  // origin: "http://localhost:3001",
  origin: "https://tp-travel-blog-front.vercel.app",
  credentials: true,
}));

/**
  La session ne doit être utilisable en ce état malgrés la configuration qui est correcte
 * Les appels au BACK se faisant à partir du serveur FRONT, l'utilisateur n'a pas aucune action directe sur la session côté BACK
 */
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // TODO: Secure à passer en true en prod + revoir la durée du cookie
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 2,
  }
}));

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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`💻 Our server has been started on: http://localhost:${PORT}`);
});