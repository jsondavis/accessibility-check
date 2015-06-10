var access = angular.module('accessApp', []);

access.controller('reportListCtrl', ['$http', '$scope',
    function($http, $scope) {
        var xhr = $http.get('/reportlist');
        xhr.success(function(d) {
            console.log(d);
            $scope.reports = d;
        });
    }
]);

angular.bootstrap(document, ['accessApp']);
