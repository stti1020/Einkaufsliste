(function() {
    'use strict';

    angular.module('app', ['ngRoute', 'restangular'])
        .config(function($routeProvider){
            $routeProvider
            //route for the standard page
            .when('/',
            {
                templateUrl: 'views/startpage.html',
                controller: 'startpageController'
            })
            .otherwise({
                redirectTo: '/'
            }
        );
     });
})();

