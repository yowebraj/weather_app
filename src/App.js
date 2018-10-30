import React from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'f58f4eac7f4114a00a904cc0ab3a17d4';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (event) => {
    //This will prevent the browser to a new URL
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    
    //We need to make our API call to OWM then convert to JSON
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();

    //Check if city and country values entered return true to render OW's data
    if(city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      });
    }
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//Makes this component available for other files to import
export default App;