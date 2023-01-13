import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <h2>{props.day}</h2>
      <span>{props.temp}</span>
    </div>
  );
}
