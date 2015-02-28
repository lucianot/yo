var NamesList = React.createClass({
  render: function() {
    var names = this.props.names;

    return (
      <ul className="name-list">
        {
          names.map(function(name) {
            return <li>{ name }</li>;
          })
        }
      </ul>
    )
  }
});

var NameForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var newName = this.refs.name.getDOMNode().value;

    // Trigger add name callback
    this.props.addName(newName);

    // Clear input box
    this.refs.name.getDOMNode().value = '';
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="name"/>
        <button>Yo!</button>
      </form>
    )
  }
});

var Names = React.createClass({
  getInitialState: function() {
    this.names = [];
    return {
      names: []
    };
  },

  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://yo-names.firebaseio.com/names/");

    // Name added
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      // Update page
      this.names.push(dataSnapshot.val());
      this.setState({ names: this.names });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },

  addName: function(name) {
    // Add to Firebase
    this.firebaseRef.push({ name: name });
  },

  render: function() {
    return (
      <div>
        <NamesList names={this.state.names}/>
        <NameForm addName={this.addName}/>
      </div>
    )
  }
});

React.render(
  <Names/>,
  document.getElementById('names')
);

