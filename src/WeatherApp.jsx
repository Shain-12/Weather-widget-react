import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weatherApp">
      <div className="weatherHeader">
        <h1>Weather Now</h1>
        <p>Check the current weather of any city</p>
      </div>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />
    </div>
  );
}
