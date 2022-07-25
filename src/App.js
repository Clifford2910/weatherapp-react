import React, {isValidElement, useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=47fdcfcb97cfce83395ff9db46678740&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>

      <div className='container'>
        <div className='main'>
          <div className='city'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='weather'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        <div className='secondary'>
          <div className='temp_min'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p> Feels Like </p>
          </div>
          <div className='temp_min'>
            {data.main ? <p className='bold'>{data.main.temp_min.toFixed()}°C</p> : null}
            <p> Min Temp </p>
          </div>
          <div className='temp_max'>
            {data.main ? <p className='bold'>{data.main.temp_max.toFixed()}°C</p> : null}
            <p> Max Temp </p>
          </div>
        </div>

        <div className='tertiary'>
          <div className='wind_speed'>
            {data.main ? <p className='bold'>{data.wind.speed.toFixed()} m/s</p> : null}
            <p> Wind Speed </p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p> Humidity </p>
          </div>
          <div class='pressure'>
            {data.main ? <p className='bold'>{data.main.pressure} hPa</p> : null}
            <p> Pressure </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
