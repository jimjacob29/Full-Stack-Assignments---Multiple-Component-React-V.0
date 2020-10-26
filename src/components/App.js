import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test attributes="project-name">
          project-name
        </h1>
        <div data-ns-test attributes="project-description">
          project-description
        </div>
      </>
    );
  }
}

export default App;
