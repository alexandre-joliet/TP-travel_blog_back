const categoryController = require('../controllers/category');
// const securityBlog2Service = require('../services/security/security');

const express = require('express');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

// Category
// On récupère une catégorie en fonction de son ID
router.get('/:id', categoryController.getOneCategory)

// On crée une nouvelle catégorie
router.post('/', categoryController.createOneCategory)

// On supprime une catégorie
router.delete('/:id', categoryController.deleteOneCategory)

// On modifie une catégorie
router.patch('/:id', categoryController.updateOneCategory)

// On affiche tous les articles liés à une catégorie
router.get('/:id/articles', categoryController.getAllArticlesByCategory);


module.exports = router;