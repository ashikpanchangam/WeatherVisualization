import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from './../components/google_map';

class WeatherList extends Component{

  renderWeather(cityData){
    const temps = cityData.list.map(weather=> weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);


    // ES6 Destructuring
    // This is equivalent to
    // const lon = cityData.city.coord.lon;
    // &
    // const lon = cityData.city.coord.lat;
    const {lon, lat} = cityData.city.coord;

    return(
      //Key has to be unique
      <tr key={cityData.city.name}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        // Making the chart a reusable component
        <td>
          <Chart data={temps} color="orange" units="K"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="black" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
      </table>
    );
  }
}

// Destructuring in ES6
function mapStateToProps({weather}){
  return {
    weather
  }; // this is equivalent to {weather} === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList);
