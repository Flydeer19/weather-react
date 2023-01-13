import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Search from "./Search";
import CityDescription from "./CityDescription";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="appBox container">
    <React.StrictMode>
      <Search />
      <CityDescription />
      <div className="container">
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
