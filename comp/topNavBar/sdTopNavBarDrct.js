app.directive('sdTopnavbar', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'comp/topnavbar/topnavbar.html',
        controller: 'sdTopNavBarCtrl'
    }
});