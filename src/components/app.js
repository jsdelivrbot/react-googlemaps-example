import React, { Component } from 'react';
import GoogleMap from './google-map.js';

export default class App extends Component {
  render() {
    return (
      <div>
        The Gong. Centre of the Universe.
        <GoogleMap lat={-34.397} lng={150.644} />
      </div>
    );
  }
}
