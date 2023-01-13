import React from "react";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";

export default function Search() {
  //   const apiKey = "8ca7dd4e61360b90fb66918853670e48";
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
  //   axios.get(apiUrl).then(showCity);
  return (
    <form className="Search">
      <input type="search" />
      <input type="submit" value="Search" />
    </form>
  );
}
