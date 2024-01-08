const express = require('express');
const signupController = require('../controllers/signup');
// const securityBlog2Service = require('../services/security/security');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

router.post('/', signupController.createAccount);


module.exports = router;