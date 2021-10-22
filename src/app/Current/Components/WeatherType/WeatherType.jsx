import React from "react";

export default function WeatherType({ children }) {
  return (
    <span className="uppercase flex flex-col items-center mt-2 mb-5 lg:mb-10 text-xl">
      {children}
    </span>
  );
}
