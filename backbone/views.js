// Names view collection
App.Views.Names = Backbone.View.extend({
  tagName: 'ul',
  className: 'name-list js-name-list',

  initialize: function() {
    this.collection.on('add', this.addOne, this);
  },

  render: function() {
    this.collection.forEach(this.addOne, this);
    return this;
  },

  addOne: function(nameItem) {
    var nameView = new App.Views.Name({ model: nameItem, el: this.$el });
    nameView.render();
  }
});

// Name view
App.Views.Name = Backbone.View.extend({
  template: _.template('<li><%= name %></li>'),

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.append(this.template(attributes));
    return this;
  }
});

// New name form view
App.Views.NameForm = Backbone.View.extend({
  template: _.template(
    '<form>' +
      '<input type="text" name="name" />' +
      '<button>Yo!</button>' +
    '</form>'
  ),

  events: {
    'submit form': 'save'
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  save: function(e) {
    e.preventDefault();
    var newName = this.$('input[name]');
    this.collection.add({ name: newName.val() })
    newName.val('');
  }
});
