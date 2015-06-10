var access = angular.module('accessApp', []);

access.controller('reportListCtrl', ['$http', '$scope',
    function($http, $scope) {
        var reports = [];
        $scope.reports = reports;

        var xhr = $http.get('/reportlist');
        xhr.success(function(d) {
            angular.forEach(d.reports, function(report) {
                reports.push({name: report});
            })
        });

    $scope.showreport = function(report) {
        angular.forEach(reports, function(report) {
            report.selected = false;
        });
        console.log(report.reportData);
        report.selected = true;
        if (typeof report.reportData === 'undefined') {
            var xhr = $http.get('reports/' + report.name);
            xhr.success(function(d) {
                report.reportData = d;
            });
        }
    };
    }
]);

access.controller('reportCtrl', ['$http', '$scope',
    function($http, $scope) {


    }
]);

var section = document.getElementById('angular-reports');
angular.bootstrap(section, ['accessApp']);
