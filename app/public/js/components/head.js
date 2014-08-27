angular.module('app.component.head', [])
.directive('head', function() {

  var Controller = [
    'PageData', '$scope',
    function(PageData, $scope) {
      $scope.page = PageData;
    }
  ];

  return {
    controller: Controller
  };
});
;
