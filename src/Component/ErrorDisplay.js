import React from "react";
import "./SeasonDisplay.css";

import "./SeasonDisplay.css";

const ErrorDisplay = props => {
  return (
    <div className="season-display error">
      <h1>Error: {props.errorMessage}</h1>
    </div>
  );
};

export default ErrorDisplay;
