import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=1170&auto=format&fit=crop";

  const HOT_URL =
    "https://images.unsplash.com/photo-1604949210966-9440c324823f?q=80&w=1170&auto=format&fit=crop";

  const COLD_URL =
    "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1170&auto=format&fit=crop";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?q=80&w=880&auto=format&fit=crop";

  let imageUrl;

  if (info.humidity > 80) {
    imageUrl = RAIN_URL;
  } else if (info.temp > 15) {
    imageUrl = HOT_URL;
  } else {
    imageUrl = COLD_URL;
  }

  let WeatherIcon;

  if (info.humidity > 80) {
    WeatherIcon = ThunderstormIcon;
  } else if (info.temp > 15) {
    WeatherIcon = SunnyIcon;
  } else {
    WeatherIcon = AcUnitIcon;
  }

  return (
    <div className="infoBox">
      <Card className="weatherCard">
        <CardMedia
          component="img"
          className="weatherImage"
          image={imageUrl}
          alt="Weather"
        />

        <div className="weatherContent">
          <div className="citySection">
            <Typography className="cityName">{info.city}</Typography>

            <WeatherIcon className="weatherIcon" />
          </div>

          <div className="temperature">
            {Math.round(info.temp)}°<span>C</span>
          </div>

          <Typography className="weatherDescription">{info.weather}</Typography>

          <Typography className="feelsLike">
            Feels like {Math.round(info.feelsLike)}°C
          </Typography>

          <div className="weatherDetails">
            <div className="detailBox">
              <WaterDropIcon />
              <div>
                <span>Humidity</span>
                <strong>{info.humidity}%</strong>
              </div>
            </div>

            <div className="detailBox">
              <DeviceThermostatIcon />
              <div>
                <span>Feels Like</span>
                <strong>{Math.round(info.feelsLike)}°C</strong>
              </div>
            </div>

            <div className="detailBox">
              <DeviceThermostatIcon />
              <div>
                <span>Min Temp</span>
                <strong>{Math.round(info.tempMin)}°C</strong>
              </div>
            </div>

            <div className="detailBox">
              <DeviceThermostatIcon />
              <div>
                <span>Max Temp</span>
                <strong>{Math.round(info.tempMax)}°C</strong>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
