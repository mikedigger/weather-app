const fetch = require('node-fetch');


const fetchForecast = async (lat, lon) => {
    const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lon}&&id=2172797&units=metric`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "7b893cefdemsh960b62dfb520e79p1e70f5jsn1f67a557a120",
        }
    })
    const body = await res.json();
    return body.main.temp;
    
};

const geocode = async (target) => {
    const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${target}.json?access_token=pk.eyJ1IjoibWlrZWRpZ2dlciIsImEiOiJja3l5aGt0eDgwc3lxMnBxbGx5a3pzdWcwIn0.nFcq7Q_z_sunuj1_Z_WpDg`);
    const body = await res.json();
    return await fetchForecast(body.features[0].center[1], body.features[0].center[0])

};

module.exports = {
    fetchForecast,
    geocode
}
// const coords = async () => {
//     const body = await geocode('lviv');
//     // console.log(body.features[0].center[0]);
//     // console.log(body.features[0].center[1]);
//     return body.features[0].center[0];
//     // return {
//     //     lat: body.features[0].center[0],
//     //     lon: body.features[0].center[1]
//     // }
// }

// console.log(coords())
// // coords()