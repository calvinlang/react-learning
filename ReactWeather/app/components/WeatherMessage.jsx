var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var message;
		var location = this.props.location;
		if (location) {
			message = "Currently it is 40 in " + location 
		}
		return (
			<span>
				{message}
			</ span>
		)
	}
})

module.exports = WeatherMessage;
