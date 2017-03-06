var React = require('react');
var WeatherForm = require('WeatherForm');
require('style!css!applicationStyles');

var Weather = React.createClass({
	getInitialState: function() {
		var location = this.props.location.query.location;
		if (location && location.length > 0) {
			return ({
				location: location,
			});
		};
		return({});
	},
	render: function() {
		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm className="text-center" location={this.state.location}/>
			</div>
		);
	}
});

module.exports = Weather; 

