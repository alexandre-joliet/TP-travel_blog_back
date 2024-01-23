const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const security = require('../services/security');

router.get('/:id', categoryController.getOneCategory)

router.post('/', security.checkTokenIsAdmin, categoryController.createOneCategory)

router.delete('/:id', security.checkTokenIsAdmin, categoryController.deleteOneCategory)

router.patch('/:id', security.checkTokenIsAdmin, categoryController.updateOneCategory)

router.get('/:id/articles', categoryController.getAllArticlesByCategory);


module.exports = router;