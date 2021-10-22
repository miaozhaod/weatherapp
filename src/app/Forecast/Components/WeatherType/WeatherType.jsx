import React from "react";

export default function WeatherType({ children, icon }) {
  return (
    <div className="uppercase flex flex-col items-center">
      <img src={icon} alt={children} className="w-10 lg:w-20" />
      {children}
    </div>
  );
}
