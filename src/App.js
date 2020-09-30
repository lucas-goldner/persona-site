import { createMuiTheme } from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={PageOne} exact={true}></Route>
      <Route path="/about" component={PageTwo}></Route>
    </Switch>
</BrowserRouter>
);

function App() {
  return (
    <div className="App">
      <PageOne id="home" />
      <PageTwo id="about" />
    </div>
  );
}

export default App;
