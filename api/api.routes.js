const router = require('express').Router();

const loginRoutes = require('./login/login.routes');

router.use('/login', loginRoutes);

module.exports = router;