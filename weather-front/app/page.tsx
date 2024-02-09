'use client'

import React, {useEffect, useState } from 'react'
import { MainContainer } from './styles/global';


export default function Home() {
  // const date =getCurrentDate();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Haifa');

  const fetchData = async(cityName:string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/weather/?city=${cityName}`);
      const data = await response.json();
      console.log('response', data)
      setWeatherData(data);
      
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    fetchData(city);

    //get icons https://openweathermap.org/weather-conditions
    // get cities list
  }, [])
  
  return (
    <MainContainer>
      <h1>Weather</h1>
    </MainContainer>
  );
}
