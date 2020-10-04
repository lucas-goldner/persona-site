import { createMuiTheme } from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";


function App() {
  return (
    <div className="App">
      <PageOne id="home" />
      <PageTwo id="about" />
      <PageThree id="projects"/>
    </div>
  );
}

export default App;
