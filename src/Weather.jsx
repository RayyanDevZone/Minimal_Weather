import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./Background";
import Place from "./Place";
import Loader from "./Loader";

function Weather() {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("Allahabad");
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7348430ee1msh0c4c2080227d37cp103d08jsncd53573b7d37",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`,
      options

    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res.temp,res.feelslike);
        setLoading(false);
      console.log({weather});
      });
  }, [location]);

  function city_name(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="main">
      <div className="child">
        <div className="inputData">
          <input id="inp" onChange={city_name} placeholder="Search..." />{" "}
        </div>

        {loading ? <Loader /> : <Place location={location} />}
        <Background weather={weather} />
        {/* <p>Feels Like: {weather.feelslike}°C</p> */}
      </div>
    </div>
  );
}

export default Weather;
