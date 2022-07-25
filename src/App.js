import React, {useState} from 'react'
import axios from 'axios'

function App() {

  // const_url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=47fdcfcb97cfce83395ff9db46678740'

  return (
    <div className="app">
    <div class='search'>
      <form action='city_search' method='get' accept-charset='UTF-8' >
      <input id='query' name='query' type='text' placeholder='Enter Location' />
      </form>
    </div>

    <div class='container'>
      <div class='main'>
        <div class='city'>
          <p>city</p>
        </div>
        <div class='temp_and_time'>
          <h1>temperature °C</h1>
          <h1>time_at_location</h1>
        </div>
        <div class='weather'>
          <p>weather</p>
        </div>
        <div class='description'>
          <p>description</p>
        </div>
      </div>

      <div class='secondary'>
        <div class='temp_min'>
          <p class='bold'>temp_min °C</p>
          <p> Min Temp </p>
        </div>
        <div class='temp_max'>
          <p class='bold'>temp_max °C</p>
          <p> Max Temp </p>
        </div>
        <div class='sunrise'>
          <p class='bold'>sunrise</p>
          <p> Sunrise </p>
        </div>
        <div class='sunset'>
          <p class='bold'>sunset</p>
          <p> Sunset </p>
        </div>
      </div>

      <div class='tertiary'>
        <div class='wind_speed'>
          <p class='bold'>wind_speed m/s</p>
          <p> Wind Speed </p>
        </div>
        <div class='humidity'>
          <p class='bold'>humidity</p>
          <p> Humidity </p>
        </div>
        <div class='pressure'>
          <p class='bold'>pressure hPa</p>
          <p> Pressure </p>
        </div>
        <div class='visibility'>
          <p class='bold'>visibility m</p>
          <p> Visibility </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
