var React = require('react');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			location: '',
			temp: ''
		}
	},
	handleSearch: function () {
		var location = this.refs.location.value;
		var that = this;
		openWeatherMap.getTemp(location).then(function (temp) {
		  that.setState({
		    location: location,
		    temp: temp
		  });
		}, function (errorMessage) {
		    alert(errorMessage);
		});
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSearch}>
					<input ref="location" type="text" />
					<button>Check Weather</button>
				</form>
				<WeatherMessage location={this.state.location} temp={this.state.temp}/>
				
			</div>
		)
	}
})

module.exports = WeatherForm;
