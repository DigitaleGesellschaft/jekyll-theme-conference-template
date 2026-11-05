// Marks the venue on the location page's map
export default function (map) {
    L.marker([47.38750, 8.52020]).addTo(map).bindPopup('Community Hall');
}
