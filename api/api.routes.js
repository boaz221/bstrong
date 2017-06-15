const router = require('express').Router();

const loginRoutes = require('./login/login.routes');
const articlesRoutes = require('./articles/articles.routes');
const userDataRoutes = require('./user-data/user-data.routes');

router.use('/login', loginRoutes);
router.use('/articles', articlesRoutes);
router.use('/user-data', userDataRoutes);

module.exports = router;