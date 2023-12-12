import './App.css';
import React, { Component } from 'react';
import Weather from './compinent/Weather';
import Form from './compinent/Form'
const API_KEY = "e36ed364400282e43250b6c4c0274d44";
class App extends Component {
  state = {
    tempreature :'',
    city : '',
    country : '',
    humidity : '',
    description: '',
    error : ''
  }
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json();
if(city && country){
  this.setState({
    tempreature :data.main.temp,
    city : data.name,
    country : data.sys.country,
    humidity : data.main.humidity,
    description: data.weather[0].description,
    error : ''
  })
}else{
  this.setState({
    tempreature :'',
    city : '',
    country : '',
    humidity : '',
    description: '',
    error : ''
  })
}
  }
  render(){
  return (
    <div className="App">
     <Weather
      tempreature = {this.state.tempreature}
      city = {this.state.city}
      country = {this.state.country}
      humidity = {this.state.humidity}
      description = {this.state.description}
      error = {this.state.error}
     />
     <Form getWeather = {this.getWeather}/> 
    </div>
  );
}
}

export default App;
