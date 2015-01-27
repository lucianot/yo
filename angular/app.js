(function() {
  var app = angular.module('yo', []);

  app.directive('names', function() {
    var controller = function($scope) {
      $scope.names = ['John', 'Paul', 'George'];

      $scope.add = function(name) {
        // Add name to list
        $scope.names.push(name);

        // Clear name input
        $scope.name = '';
        $scope.forms.nameForm.$setPristine();
      };

      $scope.forms = {};
    };

    return {
      restrict: 'E',
      templateUrl: 'names.html',
      controller: controller,
      controllerAs: 'namesCtrl',
      bindToController: true
    };
  });
})();
