const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDh_1eEIhijEjqSPkGMRAuvP7Tylj9ztQM';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        homeMobileCountryCode: 302,
        homeMobileNetworkCode: 720,
        radioType: 'gsm',
        carrier: 'Rogers Wireless',
        considerIp: true,
        cellTowers: [],
        wifiAccessPoints: []
    })
};

fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));





// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         // Success callback function - called when user location is retrieved
//         var latitude = position.coords.latitude;
//         var longitude = position.coords.longitude;
//         console.log("Latitude: " + latitude + ", Longitude: " + longitude);
//     }, function (error) {
//         // Error callback function - called when user location cannot be retrieved
//         console.log("Error: " + error.message);
//     });
// } else {
//     // Geolocation is not supported by the browser
//     console.log("Geolocation is not supported by this browser.");
// }