import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    let jsonResponse = await response.json();

    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      setError(false);

      let newInfo = await getWeatherInfo();

      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit} className="searchForm">
        <TextField
          value={city}
          onChange={handleChange}
          label="Enter city name"
          variant="outlined"
          fullWidth
          disabled={loading}
        />

        <Button
          type="submit"
          variant="contained"
          className="searchButton"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
        </Button>
      </form>

      {error && (
        <p className="errorMessage">
          City not found. Please enter a valid city name.
        </p>
      )}
    </div>
  );
}
