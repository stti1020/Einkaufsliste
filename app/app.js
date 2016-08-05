var app = angular.module( 'app', ['ngRoute'] );

// configure our routes
app.config(function($routeProvider) {
  $routeProvider

    //route for the standard page
      .when('/', {
        templateUrl : 'views/startpage.html',
        controller  : 'startpageController'
      })
        /*
      .when('/leafletUiLeaflet', {
        templateUrl : 'leafletUiLeaflet/leafletUiLeaflet.html',
        controller  : 'leafletUiLeafletController'
      })*/

      .otherwise({
          redirectTo: '/'
      })
});