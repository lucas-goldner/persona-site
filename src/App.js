import { createMuiTheme } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';


function App() {
  return (
    <div className="App">   
      <PageOne/>
      <PageTwo/>
    </div>
  );
}

export default App;
