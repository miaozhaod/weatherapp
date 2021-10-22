import React from "react";
import Day from "./Components/Day";
import { Temperature } from "components";
import WeatherType from "./Components/WeatherType";

export default function Forecast({ forecast }) {
  const fiveDaysForecastData = forecast.slice(1, 6);

  const filteredForecastData = fiveDaysForecastData.map((item) => {
    const { dt, temp, weather_type, weather_icon } = item;

    const temperature = temp.toFixed(0);
    const weatherType = weather_type;
    const icon = weather_icon;

    const dayNumber = new Date(dt).getDay();
    const weekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayString = weekArray.slice(dayNumber, dayNumber + 1).toString();

    return { dayString, temperature, weatherType, icon };
  });

  return (
    <section className="w-full flex px-6 lg:px-11 py-9 bg-white">
      <ul className="flex w-full justify-between">
        {filteredForecastData.map((item, index) => {
          const { dayString, temperature, weatherType, icon } = item;
          return (
            <li
              className="flex flex-col items-center text-xs lg:text-base"
              key={index}
            >
              <Day>{dayString}</Day>
              <Temperature font="mt-1 lg:font-medium">
                {temperature}
              </Temperature>
              <WeatherType icon={icon}> {weatherType} </WeatherType>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
