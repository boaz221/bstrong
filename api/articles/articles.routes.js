const path = require("path");
const express = require("express");

const articlesController = require('./articles.controller');
const loginTokenService = require('../login/login-token.service');

const router = express.Router();

router.use('/assets', express.static(path.join(__dirname, "assets")));

router.get('/', async (req, res, next) => {
    const {authorization} = req.headers;

    if(!loginTokenService.validateToken(authorization)){
        next(new Error("Not a valid authorization header"));
    }else{
        res.json(await articlesController.get());
    }
});

module.exports = router;