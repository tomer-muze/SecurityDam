app.directive('sdDashboard', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'comp/dashboard/dashboard.html',
        controller: 'sdDashboardCtrl'
    }
});