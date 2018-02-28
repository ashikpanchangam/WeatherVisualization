import React, {Component} from 'react';

class GoogleMap extends Component{

  // This is a life cycle method.
  // Gets called automatically after the component has been rendered to the screen
  componentDidMount(){
      // Create a embedded google map
      new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
          lat: this.props.lat,
          lng: this.props.lon
        }
      });
  }

  render(){
    return (
        <div ref="map"></div>
    );
  }
}

export default GoogleMap;
