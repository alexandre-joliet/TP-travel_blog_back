const express = require('express');
const userController = require('../controllers/user');
// const securityBlog2Service = require('../services/security/security');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

router.get('/', userController.getAllUsers);


module.exports = router;