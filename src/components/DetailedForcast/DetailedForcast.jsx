import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailedForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const defaultCity = process.env.REACT_APP_DEFAULT_CITY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getUserLocation();
        const city = location ? location.city : defaultCity;

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiKey, defaultCity]);

  const getUserLocation = async () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // Use latitude and longitude to fetch location details
            resolve(fetchLocationDetails(latitude, longitude));
          },
          (error) => {
            console.error('Error getting user location:', error);
            reject(null);
          }
        );
      } else {
        console.error('Geolocation is not supported');
        reject(null);
      }
    });
  };

  const fetchLocationDetails = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://geocode.xyz/${latitude},${longitude}?json=1`
      );

      return {
        city: response.data.city,
        country: response.data.country,
      };
    } catch (error) {
      console.error('Error fetching location details:', error);
      return null;
    }
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Render your component using the weatherData

  return (
    <div>
      {/* Display the weather information */}
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailedForecast;
