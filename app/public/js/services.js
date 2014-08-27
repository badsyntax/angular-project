'use strict';

/* Services */

var module = angular.module('app.services', ['ngResource']).
  value('version', '0.1');

module.factory('TwitterApi', ['$resource', '$location', function($resource, $location) {
  return $resource('/timeline/:username/:count/:maxId', {
    username: '@username',
    count: '@count',
    maxId: '@maxId'
  }, {
    get: {
      method: 'GET'
    }
  });
}]);

module.factory('PageData', ['$resource', function($resource){
  return function data() {
    return {
      title: ''
    };
  };
}]);
