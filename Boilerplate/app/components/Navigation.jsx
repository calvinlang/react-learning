var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            This should update
            HERE
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Navigation 1</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Navigation 2</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by Calvin Lang
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
