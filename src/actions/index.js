import axios from 'axios';

export const FETCH_WEATHER = 'fetch_weather';

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const WEATHER_API_KEY = '&appid=a1d4fc6fc7534b40f8393d968b468572';

export function fetchWeather() {
  const request = axios.get(`${ROOT_URL}q=London,uk&units=metric${WEATHER_API_KEY}`);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
