'use strict';

angular.module('app', [
  'ngRoute',
  'app.filters',
  'app.services',
  'app.directives',
  'app.controllers'
])
.config([
  '$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'Home'
    });

  $routeProvider
    .when('/sign-in', {
      templateUrl: 'partials/sign-in.html',
      controller: 'SignIn'
    });

  $routeProvider
    .when('/stream/:username', {
      templateUrl: 'partials/stream.html',
      controller: 'Stream'
    });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);
