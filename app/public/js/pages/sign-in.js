angular.module('app.page.sign-in', [
  'ngRoute',
])

.config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
    .when('/sign-in', {
      templateUrl: 'partials/sign-in.html',
      controller: 'SignInController'
    });
  }
])

.controller('SignInController', [
  'PageData', '$scope', '$location',
  function(PageData, $scope, $location) {
    $scope.username = '';
    $scope.title = PageData.title = 'Sign In';
    $scope.signIn = function() {
      $location.path('/stream/' + $scope.username);
    };
  }
])
;
