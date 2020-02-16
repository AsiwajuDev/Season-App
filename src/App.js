import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div className="App">Latitude:</div>;
  }
}

export default App;
