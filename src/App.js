import React, { Component } from "react";
import SeasonDisplay from "./Component/SeasonDisplay";
import Error from "./Component/ErrorDisplay";
import Spinner from "./Component/Spinner";

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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <Error errorMessage={this.state.errorMessage} />;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accpet location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
