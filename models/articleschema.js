var mongoose = require("mongoose");
var db = require("../connection.js");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    link: {
        type: String,
        trim: true,

    },
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;