require("dotenv").config();
const express = require('express');
const cors = require('cors');
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const Router = require('./app/routers');

app.use(cors({
  origin: ['http://localhost:3001', 'https://tp-travel-blog-front.vercel.app'],
  credentials: true,
}));

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // TODO: Secure à passer en true en prod + revoir la durée du cookie
  cookie: {
    maxAge: 1000 * 60 * 5,
    httpOnly: true,
    signed: true,
    // secure: true,
    sameSite: 'none',
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