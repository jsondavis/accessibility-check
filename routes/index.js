var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var accessSniff = require('access-sniff');

var accessOpts = {
    accessibilityLevel: 'WCAG2A',
    reportType: 'json',
    reportLocation: 'public/reports',
    verbose: false
};


function scrape(url, elem) {
    var url = 'http://' + url;
    // request(url, function(error, response, html) {
    //     if (!error) {
    //         var $ = cheerio.load(html);
    //     }
    // });
    return accessSniff.start([url], accessOpts);
}



/**
 * GET /
 * Home page
 */
exports.index = function(req, res) {

    res.render('home', {
        title: 'Home'
    });
};


/**
 * POST /
 * Home page entry
 */
exports.index_post = function(req, res) {

    console.log(req.body);

    var sniff = scrape(req.body.site_url);


    res.render('home', {
        title: 'Home'
    });
};
