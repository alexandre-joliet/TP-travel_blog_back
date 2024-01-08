const articlesController = require('../controllers/articles');
// const securityBlog2Service = require('../services/security/security');
const express = require('express');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

// Articles
// Affiche tous les articles
router.get('/', articlesController.getAllArticles);



module.exports = router;