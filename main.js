const mapClass = document.getElementById("mapid");
const main = document.querySelector(".main");
const ipInput = document.querySelector(".ip-input");
const btn = document.querySelector(".sub-icon");
const ipShow = document.querySelector(".ip-show");
const locShow = document.querySelector(".loc-show");
const timeZone = document.querySelector(".timezone-show");
const isp = document.querySelector(".isp-show");

const blackIcon = L.icon({
  iconUrl: "images/icon-location.svg", 
  iconSize: [38, 50], // size of the icon
});

// Geo Ipify
const request = function (ip) {
  fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_jfzVglKZxDJo0ygklGldIX9L60dRZ&domain=${ip}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      // Save the lat and lng for map coordinates

      const lat = res.location.lat;
      const lng = res.location.lng;
      ipShow.innerHTML = res.ip;
      locShow.innerHTML = res.location.country;
      timeZone.innerHTML = res.location.timezone + " GMT";
      isp.innerHTML = res.as.name;
      let coords = [lat, lng];

      // Re Render the map container
      main.innerHTML = "<div id='mapid'></div>";

      // Leaflet map
      let myMap = L.map("mapid").setView(coords, 13);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVhdGhtYXN0ZXIiLCJhIjoiY2tub3VkN2QzMTJtZDJwbGllMTE5dm90byJ9.mS__HI0AuLxvdsT0TSlonA",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoiZGVhdGhtYXN0ZXIiLCJhIjoiY2tub3VkN2QzMTJtZDJwbGllMTE5dm90byJ9.mS__HI0AuLxvdsT0TSlonA",
        }
      ).addTo(myMap);
      L.marker(coords, {icon:blackIcon}).addTo(myMap);
    });
};

request("192.212.174.101");

btn.addEventListener("click", function () {
  request(ipInput.value);
});
