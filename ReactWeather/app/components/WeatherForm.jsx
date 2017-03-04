var React = require('react');
var WeatherMessage = require('WeatherMessage');

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			location: ''
		}
	},
	handleSearch: function(e) {
		e.preventDefault();
		var location = this.refs.location.value;
		this.setState({
			location: location
		});
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSearch}>
					<input ref="location" type="text" />
					<button>Check Weather</button>
				</form>
				<WeatherMessage location={this.state.location}/>
				
			</div>
		)
	}
})

module.exports = WeatherForm;
