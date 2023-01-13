import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Search from "./Search";
import CityDescription from "./CityDescription";
import "./App.css";
import WeatherDescription from "./WeatherDescription";
import ReactAnimatedWeather from "react-animated-weather";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import ForecastTemp from "./ForecastTemp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="appBox container">
      <Search />
      <CityDescription />
      <div className="container">
        <div className="row">
          <div className="col ps-0">
            <div className="image me-3">
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="black"
                size={50}
                animate={true}
              />
            </div>
            <Temperature />
          </div>
          <div className="col Weather">
            <WeatherDescription />
          </div>
        </div>
      </div>
      <div className="container ms-3">
        <div className="row">
          <div className="col-2">
            <Forecast day="Mon" />
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={40}
              animate={true}
            />
            <ForecastTemp temp={11} />
          </div>
          <div className="col-2">
            <Forecast day="Tue" />
            <ReactAnimatedWeather
              icon="SLEET"
              color="black"
              size={40}
              animate={true}
            />
            <ForecastTemp temp={12} />
          </div>
          <div className="col-2">
            <Forecast day="Wed" />
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="black"
              size={40}
              animate={true}
            />
            <ForecastTemp temp={14} />
          </div>
          <div className="col-2">
            <Forecast day="Thu" />
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={40}
              animate={true}
            />
            <ForecastTemp temp={10} />
          </div>
          <div className="col-2">
            <Forecast day="Fri" />
            <ReactAnimatedWeather
              icon="WIND"
              color="black"
              size={40}
              animate={true}
            />
            <ForecastTemp temp={12} />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <a href="https://github.com/Flydeer19/weather-react">Open-source code</a>,
      by{" "}
      <a href="https://loquacious-kangaroo-77f3b3.netlify.app/">
        Oleksandra Kondieieva
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
