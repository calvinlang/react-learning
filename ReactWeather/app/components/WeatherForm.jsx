var React = require('react');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var WeatherForm = React.createClass({
	getInitialState: function() {
		if (this.props.location) {
			var location = this.props.location
		} else {
			var location = '';
		}
		return {
			location: location,
			temp: '',
			isLoading: false
		}
	},
	componentDidMount: function(){
		this.handleSearch();	
	},
	detectSearchInputType: function() {
		// Prioritizes that if there is getWeather Query
		if (this.refs.location.value) {
			return this.refs.location.value; 
		}
		return this.props.location
	},
	handleSearch: function () {
		var location = this.detectSearchInputType();
		if (!location) return;
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
					<button className="button" >Check Weather</button>
				</form>
				<WeatherMessage isLoading={this.state.isLoading} location={this.state.location} temp={this.state.temp}/>
				
			</div>
		)
	}
})

module.exports = WeatherForm;
