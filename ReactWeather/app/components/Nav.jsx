var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <h2>
        Nav Component
        <br />
        <IndexLink activeClassName="active" to="/">Get Weather</IndexLink>
        <Link activeClassName="active" to="/about">About</Link>
        <Link activeClassName="active" to="/examples">Examples</Link>
      </h2>
    );
  }
});

module.exports = Nav;
