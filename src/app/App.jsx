import { useEffect, useState } from "react";
import Current from "./Current";
import Forecast from "./Forecast";
import Cities from "./Cities";
import getWeather from "./api/GetWeather";

function App() {
  const [city, setCity] = useState("brisbane");
  const [realBackground, setRealBackground] = useState();
  const [timezone, setTimezone] = useState();
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();

  const updateCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  useEffect(() => {
    getWeather({ location: city }).then((response) => {
      setRealBackground(response.backgoundImage);
      setTimezone(response.myTimezone);
      setCurrent(response.currentData);
      setForecast(response.forecastData);
    });
  }, [city]);
  console.log(realBackground);

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen w-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${realBackground})` }}
    >
      <div className="relative z-10 flex flex-col justify-between items-center overflow-hidden w-portrait lg:w-landscape sm:rounded-3xl shadow-2xl">
        <Cities updateCity={updateCity} />
        {current && (
          <Current current={current} city={city} timezone={timezone} />
        )}
        {forecast && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
