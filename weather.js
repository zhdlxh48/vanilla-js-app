const weather = document.querySelector(".js-weather");

const OPEN_WEATHER_MAP_KEY = "eb9eb44f200ba1348305121b46daf0c6";
const COORD_INFO_LS_KEY = "coords";

const saveCoordinate = (coord) => {
  localStorage.setItem(COORD_INFO_LS_KEY, JSON.stringify(coord));
};

const getGeolocationSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  saveCoordinate({ latitude, longitude });
  getWeather({ latitude, longitude });
};
const getGeolocationFailure = () => {
  console.log("can't load geolocation");
};

const askForCoord = () => {
  navigator.geolocation.getCurrentPosition(
    getGeolocationSuccess,
    getGeolocationFailure
  );
};

const getWeather = (coord) => {
  fetch(`
  https://api.openweathermap.org/data/2.5/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${OPEN_WEATHER_MAP_KEY}&units=metric`)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      const temperature = jsonData.main.temp;
      const place = jsonData.name;
      weather.innerText = `Weather: ${temperature} & Place: ${place}`;
    });
};

const loadCoordinate = () => {
  const loadedCoord = localStorage.getItem(COORD_INFO_LS_KEY);
  if (loadedCoord === null) {
    askForCoord();
  } else {
    getWeather(JSON.parse(loadedCoord));
  }
};

function initState() {
  loadCoordinate();
}

initState();
