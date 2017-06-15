const path = require("path");
const express = require("express");

const articlesController = require('./articles.controller');
const validateAuthorization = require('../validate-authorization.middleware.js');

const router = express.Router();

router.use(validateAuthorization);
router.use('/assets', express.static(path.join(__dirname, "assets")));

router.get('/', getArticles);

async function getArticles(req, res, next){
    res.json(await articlesController.get());
}

module.exports = router;