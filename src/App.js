import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import image from './img/image.png';
import './App.css'

const API_KEY = "be915151d867bc12d9b7c779890b1866";

class App extends React.Component {

  state = {
    country: undefined,
    city: undefined,
    temp: undefined,
    humidity: undefined,
    wind: undefined

  }

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      this.setState({
        country: data.sys.country,
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    }
  render(){
    return(
      <div className="app">
        <div className="main">
        <Info/>
        <Form toWeather={this.gettingWeather}/>
        <Weather
        country={this.state.country}
        city={this.state.city}
        temp={this.state.temp}
        humidity={this.state.humidity}
        wind={this.state.wind}

        
        />
        <img src={image} width="300" height="300"/>
        </div>
        <div>
  
        </div>
      </div>
    );
  }
}

export default App;
