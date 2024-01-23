const express = require('express');
const userController = require('../controllers/user');
const accountController = require('../controllers/account');
const security = require('../services/security');
const router = express.Router();

router.get('/users', security.checkTokenIsAdmin, userController.getAllUsers);
router.delete('/users/:id', security.checkTokenIsAdmin, accountController.deleteUserAccount);


module.exports = router;