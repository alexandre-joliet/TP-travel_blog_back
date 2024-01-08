const articleController = require('../controllers/article');
const express = require('express');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

// Article
router.get('/:id', articleController.getOneArticle);
router.patch('/:id', articleController.updateArticle);   
router.delete('/:id', articleController.deleteArticle);



module.exports = router;