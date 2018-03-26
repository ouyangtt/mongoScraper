var mongoose = require("mongoose");
var db = require("../connection.js");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    articles: [{
        type: Schema.Types.ObjectId,
        ref: "Article"
    }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;