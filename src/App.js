import { createMuiTheme } from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

function App() {
  return (
    <div className="App">
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
    </div>
  );
}

export default App;
