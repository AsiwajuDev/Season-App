import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./Component/SeasonDisplay";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    //Geolocation Api
    window.navigator.geolocation.getCurrentPosition(
      //We call setState Method to Update the State of lat
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div className="App">Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      //<div className="App">Latitude: {this.state.lat}</div>;
    }
    return <div className="App">Loading!</div>;
  }
}

export default App;
