const axios = require('axios');

const getPlaceLatLon = async ( direccion ) => {

    const encodedUrl = encodeURI( direccion );
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ encodedUrl }&appid=2b6ec5e957524fb6400debcaa986d49e`
    });

    // Se realiza optimizacion de codigo creando async
/*    instance.get()
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error !!!!!!', err);
        });*/

    const response = await instance.get();

    if(response.data.length === 0){
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = response.data;
    const address = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        address,
        lat,
        lon
    }
}

module.exports = {
    getPlaceLatLon
}

