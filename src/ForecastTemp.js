import React from "react";
import "./App.css";

export default function ForecastTemp(props) {
  return (
    <div className="ForecastTemp">
      <span>{props.temp}°</span>
    </div>
  );
}
