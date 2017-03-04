var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2198862b7a975bdfdbb2d98ca004237b&units=metric';
// 2198862b7a975bdfdbb2d98ca004237b

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURILocation(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&1=${encodedLocation}`;
	
		axios.get(requestURL).then(function(res){
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
				throw new Error(res.data.message)
		})
	}

}