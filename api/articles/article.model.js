const mongoose = require('mongoose');

const Article = mongoose.model('Article', mongoose.Schema({
    link: String,
    title: String,
    displayName: String,
    previewImageName: String,
}), 'articles');

module.exports = Article;