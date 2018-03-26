var path = require("path");
var express = require("express");
var app = express();
	
var Article = require("../models/articleschema.js");

var db = require("../connection.js");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/landing_page_scraper/index.html"));
    });

app.get("/scraper", function(req, res) {
    article.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        }
        else {
            res.sendFile(path.join(__dirname + "../layouts/scrape.handlebars"));
        }
    });
});
};


