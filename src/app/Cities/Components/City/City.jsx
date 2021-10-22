import React from "react";

export default function City({ children }) {
  return (
    <button className="font-light capitalize" type="submit" value={children}>
      {children}
    </button>
  );
}
