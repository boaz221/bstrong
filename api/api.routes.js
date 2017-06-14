const router = require('express').Router();

const loginRoutes = require('./login/login.routes');
const articlesRoutes = require('./articles/articles.routes');

router.use('/login', loginRoutes);
router.use('/articles', articlesRoutes);

module.exports = router;