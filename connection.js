
var mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/news");
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

module.exports = db;