const mapClass = document.getElementById("mapid");

let myMap = L.map("mapid").setView([35.6892, 51.3890], 13);

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
const marker = L.marker([35.6892, 51.3890]).addTo(myMap);
