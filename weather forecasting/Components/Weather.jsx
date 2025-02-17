import React from 'react'
import '../Css/style.css'

import clearSky from '../src/assets/clear-sky.png';
import cloudyDay from '../src/assets/cloudy-day.png';
import rainyDay from '../src/assets/rainy-day.png';
import searchIcon from '../src/assets/search.png';
import snow from '../src/assets/snow.png';
import sun from '../src/assets/sun.png';
import windy from '../src/assets/windy.png';
     
const Weather = () => {
  return (
    <div className='container'>
        <div className='input-container'>
            <input type="text" placeholder='Search city'  className='cityname'/>
            <div className='search-icon'>
                <img src="/" alt="" />
            </div>


        </div>
    </div>
  )
}

export default Weather
