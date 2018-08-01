import React, { Component } from 'react';

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  // We never want this component to update - it should only render once, as we want Google Maps to handle
  // all the related updates etc, not React
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.addGoogleMapsScripts(() => {
      const gmap = new google.maps.Map(this.mapContainer.current, {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 8
      });
    });
  }

  render() {
    return <div id="map" ref={this.mapContainer} />;
  }

  addGoogleMapsScripts(callback) {
    const maps = document.createElement('script');
    maps.setAttribute(
      'src',
      `https://maps.googleapis.com/maps/api/js?callback=gmapsCallback&key=${
        process.env.GOOGLE_API_KEY
      }`
    );
    window.addEventListener('gmapsLoaded', callback);
    
    window.gmapsCallback = () => window.dispatchEvent(new Event('gmapsLoaded'));

    document.head.appendChild(maps);
  }
}
