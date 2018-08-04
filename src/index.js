const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VlbGV5IiwiYSI6ImNqa2Z1a2xhbDBhYmgza21peXlnMGoyNGsifQ.REn-erxdXmLjYmJK1vd8xA';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});


buildMarker('Fullstack', [-74.009, 40.705]).addTo(map);
buildMarker('hotel', [-74.0080, 40.7050]).addTo(map);
buildMarker('activit', [-73.9934, 40.7505]).addTo(map);
buildMarker('restaurant', [-73.9906, 40.7177 ]).addTo(map);
