angular.module('app.page.stream', [
  'ngRoute',
])

.config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
    .when('/stream/:username', {
      templateUrl: 'partials/stream.html',
      controller: 'StreamController'
    });
  }
])

.controller('StreamController', [
  'TwitterApiService', '$scope', '$routeParams', '$location',
  function(TwitterApi, $scope, $routeParams, $location) {

    var count = 10;
    var maxId = '';

    $scope.loaded = false;
    $scope.title = 'Steam';
    $scope.tweets = [];
    $scope.error = null;
    $scope.finished = false;

    function onLoadSuccess(response) {
      $scope.loaded = true;
      $scope.loading = false;

      if (!($scope.error = (response.error))) {
        if (maxId) {
          response.success.shift();
        }
        if (response.success.length) {
          $scope.tweets = $scope.tweets.concat(response.success);
        } else {
          $scope.finished = true;
        }
      }
    }

    function onLoadError(error) {
      $scope.error = true;
      $scope.loaded = true;
      $scope.loading = false;
    }

    $scope.load = function load() {
      $scope.loading = true;
      if ($scope.tweets.length) {
        maxId = $scope.tweets[$scope.tweets.length-1].id;
      }
      TwitterApi.get({
        username: $routeParams.username,
        count: count,
        maxId: maxId
      }, onLoadSuccess, onLoadError);
    };

    $scope.viewTweet = function(id) {
      window.location = 'https://twitter.com/' + $routeParams.username + '/status/' + id;
    };

    $scope.load();
  }
])
;
