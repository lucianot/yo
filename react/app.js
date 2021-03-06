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
      <form>
        <input type="text" ref="name"/>
        <input type="submit" value="Yo!" onClick={this.handleSubmit}/>
      </form>
    )
  }
});

var Names = React.createClass({
  getInitialState: function() {
    return {
      names: this.props.names
    };
  },

  addName: function(name) {
    // Add new name to list
    this.state.names.push(name);

    // Update page
    this.setState({names: this.state.names});
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

var NAMES = ['John', 'Paul', 'George'];

React.render(
  <Names names={NAMES}/>,
  document.getElementById('names')
);

