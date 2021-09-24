const COORDS_LS = 'coords';
const API_KEY = '75787c308f283527b34dff6f9ed6f9b8';

const wetherConteiner = document.querySelector('.js-weather');

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      wetherConteiner.innerText = `${temperature} @${place}`;
    });
}

function saveCoords(positionObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(positionObj));
}

function geoSuccessHundle(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const positionObj = {
    latitude,
    longitude,
  };
  saveCoords(positionObj);
  getWeather(latitude, longitude);
}

function geoErroHundle() {
  const loadedCoords = JSON.parse(coords);
  console.log(loadedCoords);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccessHundle, geoErroHundle);
}

function getCoords() {
  const coords = localStorage.getItem(COORDS_LS);
  if (coords === null) {
    askForCoords();
  } else {
    const loadedCoords = JSON.parse(coords);
    console.log(loadedCoords);
    getWeather(loadedCoords.latitude, loadedCoords.longitude);
  }
}

function init() {}
getCoords();
init();
