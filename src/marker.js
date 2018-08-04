const mapboxgl = require("mapbox-gl");

module.exports = (type, cord)=> {
    const marker = document.createElement('div');
    marker.style.height = '39px';
    marker.style.width = '32px';
    
    switch(type) {
        case 'activity':
            marker.style.backgroundImage = "url('http://i.imgur.com/WbMOfMl.png')";
            break;
        case 'hotel':
            marker.style.backgroundImage = "url('http://i.imgur.com/D9574Cu.png')";
            break;
        case 'restaurant': marker.style.backgroundImage = "url('http://i.imgur.com/cqR6pUI.png')";
            break;
        default: 
            marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
            break;
    }

   return new mapboxgl.Marker(marker).setLngLat(cord);
};