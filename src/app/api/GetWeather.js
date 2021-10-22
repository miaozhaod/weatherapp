import Axios from "axios";
import beijing from "assets/beijing.jpeg";
import brisbane from "assets/brisbane.jpeg";
import hobart from "assets/hobart.jpeg";
import london from "assets/london.jpeg";

const openWeatherApiKey = "ed9e830cd51367c6b723e424ffae8a7d";
const openWeatherBaseUrl = "https://api.openweathermap.org/data/2.5/onecall";

const myCities = {
  brisbane: {
    latitude: -27.4679,
    longitude: 153.0281,
    background: brisbane,
  },
  hobart: {
    latitude: -42.8794,
    longitude: 147.3294,
    background: hobart,
  },
  beijing: {
    latitude: 39.9075,
    longitude: 116.3972,
    background: beijing,
  },
  london: {
    latitude: 51.5085,
    longitude: -0.1257,
    background: london,
  },
};

const getWeather = async ({ location }) => {
  const { latitude, longitude } = myCities[location];
  let myTimezone = "";
  const currentData = [];
  const forecastData = [];

  await Axios({
    url: openWeatherBaseUrl,
    params: {
      appid: openWeatherApiKey,
      lat: latitude,
      lon: longitude,
      exclude: "minutely,hourly,alerts",
      units: "metric",
    },
  }).then((response) => {
    const { timezone, current, daily } = response.data;

    // get timezone
    myTimezone = myTimezone + timezone;

    // get current weather data
    const { temp, weather, humidity, wind_speed } = current;
    const neededDataForCurrent = {
      temp: temp.toFixed(0),
      weather_type: weather[0].main,
      humidity: humidity,
      wind_speed: wind_speed.toFixed(1) * 10,
    };
    currentData.push(neededDataForCurrent);

    // get forecast weather data
    daily.forEach((day) => {
      const { dt, temp, weather } = day;
      const neededDataForForecast = {
        dt: dt * 1000,
        temp: temp.day,
        weather_type: weather[0].main,
        weather_icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      };
      forecastData.push(neededDataForForecast);
    });
  });
  return {
    backgoundImage: myCities[location].background,
    myTimezone,
    currentData,
    forecastData,
  };
};

export default getWeather;
