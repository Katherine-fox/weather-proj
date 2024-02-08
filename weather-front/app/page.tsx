'use client'

import React, {useEffect, useState } from 'react'


export default function Home() {
  // const date =getCurrentDate();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);

  const fetchData = async(cityName:string) => {
    try {
      const response = await fetch("http://localhost:3000/api/weather/weather?address="+cityName);
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    console.log('first')
  }, [])
  
  return (
    <main>
      <h1>hello</h1>
    </main>
  );
}
