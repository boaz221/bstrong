const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./api.routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(apiRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'));
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