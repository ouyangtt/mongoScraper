var request = require("request");

var cheerio = require("cheerio");

var Article = require("./models/articleschema.js");
var User = require("./models/userschema.js");

module.exports = function(app) {


    request("https://www.sfchronicle.com", function(error, response, html) {

        var $ = cheerio.load(html);

        var result = [];

   
        $("a").each(function(i, element) {

      
            var title = $(this).text();
            var link = $(element).attr("href");
            result.push({
                title: title,
                link: link
            });

            var scrapeInfo = new Article({ title: title, link: link });
        
            scrapeInfo.save(function(err) {
                if (err) console.log(err);
                
                else {
                    console.log(scrapeInfo);
                }
            });

        });


        console.log(result);

    });

};