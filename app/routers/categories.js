const express = require('express');
const categoriesController = require('../controllers/categories');
// const securityBlog2Service = require('../services/security/security');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

// Categories
// On récupère toutes les catégories
router.get('/', categoriesController.getAllCategories)


module.exports = router;