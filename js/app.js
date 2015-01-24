$(document).ready(function() {
  var app = new App();
});

function App() {
  this.form = $('.js-form');
  this.name = $('.js-form__name');
  this.nameList = $('.js-name_list');
  this.names = ['John', 'Paul', 'George'];

  this._refreshNames(this.names);
  this.form.submit(this._submitHandler.bind(this));
}

App.prototype._refreshNames = function(names) {
  var nameList = this.nameList;

  nameList.empty();
  names.forEach(function(name) {
    nameList.append('<li>' + name + '</li>');
  })
}

App.prototype._submitHandler = function(e) {
  e.preventDefault();
  var newName = this.name.val();

  this.names.push(newName);
  this._refreshNames(this.names);
}
