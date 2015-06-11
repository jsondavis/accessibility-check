var fs = require('fs');
var path = require('path');


exports.list = function(req, res) {
    var reports = fs.readdirSync('./public/reports/');
    res.json({reports:reports});
};
