const articleController = require('../controllers/article');
const express = require('express');
const router = express.Router();
const security = require('../services/security');

router.get('/:id', articleController.getOneArticle);
router.post('/', security.checkTokenIsAdmin, articleController.createArticle)
router.patch('/:id', security.checkTokenIsAdmin, articleController.updateArticle);   
router.delete('/:id', security.checkTokenIsAdmin, articleController.deleteArticle);



module.exports = router;