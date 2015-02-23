// Main app
var App = new (Backbone.View.extend({
  Models: {},
  Views: {},
  Collections: {},

  // Bootstrap app
  start: function(bootstrap) {
    this.names = new App.Collections.Names(bootstrap.names);
    this.namesView = new App.Views.Names({ collection: this.names });
    this.nameForm = new App.Views.NameForm({ collection: this.names });
    this.render();
  },

  render: function() {
    this.$el.append(this.namesView.render().el);
    this.$el.append(this.nameForm.render().el);
  }
}))({ el: $('#names') });

// Name model
App.Models.Name = Backbone.Model.extend({});

// Name model collection
App.Collections.Names = Backbone.Collection.extend({
  model: App.Models.Name
});

var bootstrap = {
  names: [
    {name: 'John'},
    {name: 'Paul'},
    {name: 'George'}
  ]
};

$(function() {
  App.start(bootstrap);
});
