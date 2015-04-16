app.directive('sdWidget', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'comp/widget/widget.html',
        controller: 'sdWidgetCtrl'
    }
});