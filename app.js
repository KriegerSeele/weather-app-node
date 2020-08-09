const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('./config/yargs').argv;

//console.log(argv.address);

//place.getPlaceLatLon( argv.address )
//    .then( console.log )
//    .catch( console.log );

//weather.getWeather(40.71, -74.01)
//    .then( console.log )
//    .catch( console.log );

// HomeWork
const getInfo = async( address ) => {

    try{
        const coords = await place.getPlaceLatLon( argv.address );
        const weath = await  weather.getWeather( coords.lat, coords.lon);
        return `El clima de ${ coords.address } es de ${ weath }° .`;
    }
    catch (e) {
        return `No se pudo determinar el clima de ${ address }`;
    }
}

getInfo( argv.address )
    .then( console.log )
    .catch( console.log );
