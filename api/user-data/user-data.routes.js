const router = require("express").Router();

const userDataController = require('./user-data.controller');
const loginTokenService = require('../login/login-token.service');
const validateAuthorization = require('../validate-authorization.middleware.js');

router.use(validateAuthorization);

router.get('/', get);
router.post('/set-comment', setComment);

async function get(req, res, next) {
    const {authorization} = req.headers;

    res.json(await userDataController.get(loginTokenService.decryptToken(authorization).username));
}

async function setComment(req, res, next) {
    const {authorization} = req.headers;
    const {comment} = req.body;

    res.json(await userDataController.setComment(loginTokenService.decryptToken(authorization).username, comment));
}

module.exports = router;