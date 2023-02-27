import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setLoaded(true);
    console.log(weather);
    console.log(city);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `738993d32099f81cb584e637be73ea30`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showTemperature);
  }

  let form = (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your city"
          className="search-box"
          onChange={updateCity}
        />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="container mt-5">
          <div className="row">
            <img
              src={weather.icon}
              alt="weather icon"
              className="main-icon img-fluid"
            />
            <p className="mb-0">
              <strong>{`It is ${weather.temperature}°C in ${city}`}</strong>
            </p>
            <p className="mt-0 inter description">{weather.description}</p>
          </div>
          <div className="row justify-content-center gx-5">
            <div className="col-auto">
              <p className="mb-0">
                <strong>wind</strong>
              </p>
              <p className="inter description">{weather.wind}</p>
            </div>
            <div className="col-auto">
              <p className="mb-0">
                <strong>humidity</strong>
              </p>
              <p className="inter description">{weather.humidity}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
