var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: (e) => {
    e.preventDefault();
    alert("Not Wired Up Yet")
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                Get Temperature!
              </li>
              <li>
                <IndexLink activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/">Get Weather</IndexLink>
              </li>
              <li>
                <Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/about">About</Link>
              </li>
              <li>
                <Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/examples">Examples</Link>
              </li>
            </ul>  
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeHolder="Search Weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>

      </div>
    );
  }
});

module.exports = Nav;

