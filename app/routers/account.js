const express = require('express');
const accountController = require('../controllers/account');
// const securityBlog2Service = require('../services/security/security');
const router = express.Router();

// L'utilisateur est-il connecté
// router.use(securityBlog2Service.isConnected);

router.get('/', accountController.showUserInfo);

router.patch('/lastname/:id', accountController.updateUserLastName);
router.patch('/firstname/:id', accountController.updateUserFirstName);
// router.patch('/avatar/:id');
router.patch('/mail/:id', accountController.updateUserMail);
router.patch('/pseudo/:id', accountController.updateUserPseudo);
router.patch('/password/:id', accountController.updateUserPassword);


module.exports = router;