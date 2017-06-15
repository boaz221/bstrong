const articleStore = require('./articles.store');

module.exports = {
    get
};

function get() {
    return articleStore.get();
}