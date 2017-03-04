var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var location = this.props.location;
		var temp = this.props.temp;
		if (temp) {
			var message = "Currently it is " + temp + " Celsius in " + location 
		}
		if (this.props.isLoading) {
			var message1 = "Loading"
		}
		return (
			<span>
				{message1}
				{message}
			</span>
		)
	}
})

module.exports = WeatherMessage;
