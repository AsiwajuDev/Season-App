import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //State Created through Constructor
  constructor(props) {
    super(props);

    //Initializa State
    this.state = { lat: null, errorMessage: "" };
    //Geolocation Api
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //We call setState Method to Update the State of lat
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div className="App">Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div className="App">Latitude: {this.state.lat}</div>;
    }
    return <div className="App">Loading!</div>;
  }
}

export default App;
