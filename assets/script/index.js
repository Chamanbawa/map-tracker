'use strict';


function getLocation(position) {
    const { latitude, longitude } = position.coords;

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbWFucHJlZXRiYXdhIiwiYSI6ImNsYmdyeDNhZzBodHYzb211MnNjNW43bjcifQ.LrFSdfTtOaY4wbKCUeXeWg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/chamanpreetbawa/clbl4dyy7000a14o50895o0fc',
        zoom: 15,

        center: [longitude, latitude],

    });
// Create a new marker.
const marker = new mapboxgl.Marker({
    color: "#66bacf",
    }).setLngLat([longitude, latitude])
    .addTo(map);

}

// Create a new marker.

function errorHandler(error) {
    console.log(error.message);
}

const options = {
    enableHighAccuracy: true
};


if (navigator.geolocation) {
    let geo = navigator.geolocation;
    geo.getCurrentPosition(getLocation, errorHandler, options);
} else {
    console.log('Geo Location is not suppprted by your browser');
}





