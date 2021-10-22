import React from "react";

export default function Temperature({ font, children }) {
  return (
    <span className={font}>
      {children}
      <sup>&#8451;</sup>
    </span>
  );
}
