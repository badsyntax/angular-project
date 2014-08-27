angular.module('app.component.header', [])
.directive('header', function() {

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
