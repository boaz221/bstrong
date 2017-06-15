const articleModel = require('./article.model');

module.exports = {
    get
};

function get() {
    return articleModel.find().lean().exec();
}