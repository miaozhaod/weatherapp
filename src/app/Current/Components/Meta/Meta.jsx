import React from "react";

export default function Meta({ title, children, unit }) {
  return (
    <div className="flex flex-col items-center">
      <span className="uppercase">{title}</span>
      <span>
        {children}
        <sup className="uppercase">{unit}</sup>
      </span>
    </div>
  );
}
