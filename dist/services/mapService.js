let map;
let marker;
export function loadMap() {
    map = L.map('map').setView([39.900833, -75.1675], 10);
    L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=joTmYYOJlSXYIyLIMnvF', {
        maxZoom: 19,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);
    marker = L.marker([39.900833, -75.1675]).addTo(map)
        .bindPopup('Home of the Super Bowl Champs baby, GO BIRDS 🦅')
        .openPopup();
    console.log('is this thing on?');
}
export function updateMap(lat, lng, popupText) {
    if (map && marker) {
        map.setView([lat, lng], 10);
        marker.setLatLng([lat, lng]).bindPopup(popupText).openPopup();
    }
    else {
        console.error('something aint working kid');
    }
}
