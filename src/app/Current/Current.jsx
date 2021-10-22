import React from "react";
import { useState, useEffect } from "react";
import { Temperature, Divider } from "components";
import { City, Realtime, Meta, WeatherType } from "./Components";

export default function Current({ current, city, timezone }) {
  const [temperature, setTemperature] = useState();
  const [weatherType, setWeatherType] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [realtime, setRealtime] = useState();

  useEffect(() => {
    const clock = setInterval(() =>
      setRealtime(
        new Date().toLocaleString("en-AU", {
          hour12: false,
          timeZone: timezone,
        }),
        1000
      )
    );
    return () => clearInterval(clock);
  }, [timezone]);

  useEffect(() => {
    const { temp, weather_type, humidity, wind_speed } = current[0];

    setTemperature(temp);
    setWeatherType(weather_type);
    setHumidity(humidity);
    setWind(wind_speed);
  }, [current]);

  return (
    <section className="w-full px-11 py-9 flex flex-col items-center lg:flex-row-reverse lg:items-start justify-between bg-black bg-opacity-50 text-white font-medium">
      <div className="flex flex-col items-center lg:items-end">
        <City>{city}</City>
        <Realtime realtime={realtime} />
      </div>
      <div className="flex flex-col items-center mt-5 lg:mt-0">
        <Temperature font="text-6xl font-medium"> {temperature} </Temperature>
        <WeatherType>{weatherType}</WeatherType>
        <div className="flex">
          <Meta title="humidity" unit="%">
            {humidity}
          </Meta>
          <Divider />
          <Meta title="wind" unit="km/h">
            {wind}
          </Meta>
        </div>
      </div>
    </section>
  );
}
