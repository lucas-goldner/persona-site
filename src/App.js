import { createMuiTheme } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import PageOne from './PageOne';

function App() {
  return (
    <div className="App">   
      <PageOne/>
    </div>
  );
}

export default App;
