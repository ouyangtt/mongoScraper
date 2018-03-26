
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");




var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static(path.join(__dirname, "public")));
require("./routes/routes.js")(app);
var scraper = require("./scraper.js")(app);



var db = require("./connection.js");

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});