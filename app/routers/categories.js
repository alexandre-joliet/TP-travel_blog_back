const express = require('express');
const categoriesController = require('../controllers/categories');
const router = express.Router();

router.get('/', categoriesController.getAllCategories)


module.exports = router;