angular.module('app.page.home', [
  'ngRoute',
])

.config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    });
  }
])

.controller('HomeController', [
  'PageData', '$scope', '$location',
  function HomeController(PageData, $scope, $location) {
    $scope.title = PageData.title = 'Home';
  }
])
;
