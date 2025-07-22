// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'


declare const L: any
let map: L.Map
let marker: L.Marker


export function loadMap(): void {

    map = L.map('map').setView([39.900833, -75.1675], 10);

    L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=joTmYYOJlSXYIyLIMnvF', {
        maxZoom: 19,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);

    marker = L.marker([39.900833, -75.1675]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

    console.log('is this thing on?')
}

window.addEventListener('load', loadMap)

// export function updateMap(lat: number, lng: number): void {
//     if (map && marker) {
//         map.setView([lat, lng], 10)
//         marker.setLatLng([lat, lng])
//     } else {
//         console.error('something aint working kid')
//     }
// }