import'./App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Current from './components/Current';
import Forecast from './components/Forecasting';
import '../node_modules/bootstrap/dist/js/bootstrap';


function App() {
  const [city, setCity] = useState();
  const [citysuggestion, setCitysuggestion] = useState([]);
  const [clickedcity,setClickedcity] = useState();
  const [currentWeather, setCurrent] = useState();
  const [forecastWeather, setForecast] = useState();
  const [location, setLocation] = useState();


  // for API call 
  const autoweatherAPI = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=';

  // for city's API 
  const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;
  
  
  






  //For useeffect

  useEffect(() => {
    if (city && city.length > 3) {
      fetchautoAPI();
    }

  }, [city]);




  // fetching the city name and region name and country

  const fetchautoAPI = async () => {
    try {
      const response = await axios.get(autoweatherAPI + city);
      const resp = response.data;
      console.log("api call", resp);
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`
      });
      setCitysuggestion(cityData);
    } catch (e) {
      console.log("error", e);
    }
  }

  //for display current weather and forecast

  const autoweatherURL = async (city) => {
    try {
      const response = await axios.get(weatherURL(city));
      const resp = response.data;
      //console.log(resp);
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log('current', resp.current);
      console.log('forecast', resp.forecast);
      console.log('location', resp.location);


    } catch (e) {
      console.log("weatherAPI error", e);
    }
  }
   

      //DARK MOOD

      
   






  // click the city after to change it and city set into the input box

  const handleSelectedCity = (city) => {
    console.log("city is clicked", city);
    setClickedcity(city);
    autoweatherURL(city);
    setCitysuggestion([]);
  }

    // refresh input box (clear old searching city)

  return (
    
     
    <div className="container mt-5">
      
      <p class=" container mb-5 text-center text-uppercase  fs-2" style={{textShadow:' 2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.3)'}}><b>Weather Prediction</b></p>
  
      <input type="text" placeholder='Enter the City'
      value={clickedcity}
      className="form-control "
      onChange={(e) => { 
        setCity(e.target.value);
      if(e.target.value===""){
        setCurrent();
        setForecast();
        setLocation();
        setClickedcity();
      }
      }} 
      />
      
    


      {citysuggestion && citysuggestion.map((city, index) => {
        return (
          <div key={index}
            className='text-center text-white border border-black border-opacity-10 rounded p-2'
            style={{ cursor: 'pointer' }} onClick={() => handleSelectedCity(city)}>{city}</div>
        );
      })}

        {/* props methode  (add the page)*/}

      {currentWeather && <Current currentWeather={currentWeather} location={location} />}
      {forecastWeather && <Forecast forecastWeather={forecastWeather} location={location}/>}
    </div>
  );
}




export default App;




