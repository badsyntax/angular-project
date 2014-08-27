'use strict';

angular.module('app', [
  'ngRoute',
  'app.filters',
  'app.services',
  'app.directives',
  'app.page.home',
  'app.page.sign-in',
  'app.page.stream',
  'app.component.head',
  'app.component.header'
])
.config([
  '$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }
]);
