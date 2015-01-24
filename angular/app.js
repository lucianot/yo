(function() {
  var app = angular.module('yo', []);

  app.directive('names', function() {
    return {
      restrict: 'E',
      templateUrl: 'names.html',
      controller: function() {
        this.names = ['John', 'Paul', 'George'];

        this.add = function(name) {
          this.names.push(name);
        };
      },
      controllerAs: 'namesCtrl'
    };
  });
})();
