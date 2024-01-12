const express = require('express');
const userController = require('../controllers/user');
const accountController = require('../controllers/account');
// const securityBlog2Service = require('../services/security/security');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

router.get('/users', userController.getAllUsers);
router.delete('/users/:id', accountController.deleteUserAccount);



module.exports = router;