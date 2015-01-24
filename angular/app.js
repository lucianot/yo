(function() {
  var app = angular.module('yo', []);

  app.controller('NamesController', function() {
    this.names = ['John', 'Paul', 'George'];

    this.add = function(name) {
      this.names.push(name);
    }
  });
})();
