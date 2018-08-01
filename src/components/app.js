import React, { Component } from 'react';
import GoogleMap from './google-map.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: -34.397, lng: 150.644 };
  }

  render() {
    return (
      <div>
        The Gong. Centre of the Universe.
        <button
          onClick={() => this.setState({ lat: 40.7128, lng: -74.0059 })}
          className="btn btn-primary"
        >
          Take me to New York
        </button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}
