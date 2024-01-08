const favoritesController = require("../controllers/favorites");
// const securityBlog2Service = require('../services/security/security');
const express = require('express');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

router.get('/:id', favoritesController.getAllFavorites);
router.post('/', favoritesController.addFavorites);
// TODO: ajouter l'id de l'article à supprimer comme paramètre du delete
router.delete('/:id', favoritesController.deleteFavorite);

module.exports = router;