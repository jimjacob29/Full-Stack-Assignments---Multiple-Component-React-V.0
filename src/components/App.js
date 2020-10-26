import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <div data-ns-test attributes="project-name">
          project-name
        </div>
        <div data-ns-test attributes="project-description">
          project-description
        </div>
      </>
    );
  }
}

export default App;
