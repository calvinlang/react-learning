var React = require('react');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			location: '',
			temp: '',
			isLoading: false
		}
	},
	handleSearch: function () {
		var location = this.refs.location.value;
		this.setState({
			isLoading: true
		});
		var that = this;
		openWeatherMap.getTemp(location).then(function (temp) {
		  that.setState({
		    location: location,
		    temp: temp,
		    isLoading: false
		  });
		}, function (errorMessage) {
		    console.log(errorMessage);
		});
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSearch}>
					<input ref="location" type="text" />
					<button>Check Weather</button>
				</form>
				<WeatherMessage isLoading={this.state.isLoading} location={this.state.location} temp={this.state.temp}/>
				
			</div>
		)
	}
})

module.exports = WeatherForm;
