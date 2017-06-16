const _ = require('lodash');
const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRoutes = require('./api.routes');

const app = express();
const port = process.env.PORT || 3002;

mongoose.connect('mongodb://207.154.222.3/bstrong');
mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use("/api", apiRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "..", "build")));
}

app.use((req, res, next) => {
    const error = new Error("Route Not Found!");
    error.status = 404;
    next(error)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json(_.pick(err, ["message", "stack", "name", "data", "status"]))
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});