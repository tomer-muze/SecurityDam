angular.module('app', ['gridster', 'ui.bootstrap', 'ngRoute'])

// filter helper code
.filter('object2Array', function () {
    return function (input) {
        var out = [];
        for (i in input) {
            out.push(input[i]);
        }
        return out;
    }
});

var app = angular.module('app');