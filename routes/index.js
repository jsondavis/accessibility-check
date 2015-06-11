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


/**
 * scrape accepts
 * url:string
 * reportLevel:string [optional] 
 * and uses accessSniff to generate accessibility reports
 */
function scrape(url, reportLevel) {
    // **TODO** 
    // add functionality to follow links within same folder?

    if (url === '') {
        return {};
    } else if (url.indexOf('http://') === -1) {
        var url = 'http://' + url;
    }

    if (url.indexOf('#') !== -1) {
        url = url.substring(0, url.indexOf('#'));
    }

    // update report folder and report Level if provided
    if (typeof reportLevel !== 'undefined' && reportLevel !== '') {
        accessOpts.reportType = reportLevel;
    }

    //accessOpts.reportLocation = accessOpts.reportLocation + '/' + url.replace('http://','').replace('https://','');

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
