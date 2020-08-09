const axios = require('axios');

const getWeather = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=dc67850af0c27ef109334a1c40698fdd&units=metric`);

    return response.data.main.temp;
}

module.exports = {
    getWeather
}
