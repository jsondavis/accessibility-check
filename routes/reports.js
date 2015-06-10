var fs = require('fs');

exports.list = function(req, res) {
    var reports = fs.readdirSync('./public/reports/');
    res.json({reports:reports});
};
