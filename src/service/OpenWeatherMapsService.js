const axios = require("axios");
const helper = require("../helper/general");
require('dotenv/config');

const apiKey = process.env.API_KEY_OPEN_WEATHER_MAPS;
module.exports = {
    getData: (city) => {
        const formatCity = helper.formatString(city);
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${formatCity}&APPID=${apiKey}&units=metric`)
            .then(response => response.data)
            .catch(error => console.log(error));
    },
};
