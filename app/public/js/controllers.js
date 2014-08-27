'use strict';

/* Controllers */

var controllersModule = angular.module('app.controllers', []);

controllersModule.controller('Home', [
  'PageData', '$scope', '$location',
  function(PageData, $scope, $location) {
    $scope.title = PageData.title = 'Home';
  }
]);

controllersModule.controller('Head', [
  'PageData', '$scope', '$location',
  function(PageData, $scope, $location) {
    $scope.page = PageData;
  }
]);

controllersModule.controller('Header', [
  'PageData', '$scope', '$location',
  function(PageData, $scope, $location) {
    $scope.page = PageData;
  }
]);

controllersModule.controller('SignIn', [
  'PageData', '$scope', '$location',
  function(PageData, $scope, $location) {
    $scope.username = '';
    $scope.title = PageData.title = 'Sign In';
    $scope.signIn = function() {
      $location.path('/stream/' + $scope.username);
    };
  }
]);

controllersModule.controller('Stream', [
  'TwitterApiService', '$scope', '$routeParams', '$location',
  function(TwitterApi, $scope, $routeParams, $location) {

    var count = 10;
    var maxId = '';

    $scope.loaded = false;
    $scope.title = 'Steam';
    $scope.tweets = [];
    $scope.error = null;
    $scope.finished = false;

    $scope.load = function() {
      $scope.loading = true;
      if ($scope.tweets.length) {
        maxId = $scope.tweets[$scope.tweets.length-1].id;
      }
      TwitterApi.get({
        username: $routeParams.username,
        count: count,
        maxId: maxId
      }, function success(response) {

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
      }, function error(error) {
        $scope.error = true;
        $scope.loaded = true;
        $scope.loading = false;
      });
    };

    $scope.viewTweet = function(id) {
      window.location = 'https://twitter.com/' + $routeParams.username + '/status/' + id;
    };

    $scope.load();
  }
]);
