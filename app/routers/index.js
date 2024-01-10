const articlesRouter = require('./articles');
const articleRouter = require('./article');
const categoriesRouter = require('./categories');
const categoryRouter = require('./category');
const signupRouter = require('./signup');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const userRouter = require('./user');
const accountRouter = require('./account');;
const favoritesRouter = require("./favorites");


const express = require('express');
const router = express.Router();


router.use('/articles', articlesRouter);
router.use('/article', articleRouter);

router.use('/categories', categoriesRouter);
router.use('/category', categoryRouter);

router.use('/signup', signupRouter);

router.use('/login', loginRouter);
router.use('/logout', logoutRouter);

router.use('/users', userRouter);

router.use('/account', accountRouter);

router.use('/favorites', favoritesRouter);


module.exports = router;