app.controller('sdWidgetCtrl', ['$scope', '$modal',
	function ($scope, $modal) {

	    $scope.remove = function (widget) {
	        $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
	    };

	    $scope.openSettings = function (widget) {
	        $modal.open({
	            scope: $scope,
	            templateUrl: 'comp/widget/sd-widget-settings.html',
	            controller: 'sdWidgetSettingsCtrl',
	            resolve: {
	                widget: function () {
	                    return widget;
	                }
	            }
	        });
	    };
	}
])