import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, orange, green } from '@material-ui/core/colors';
import Navbar from './components/navbar';
import MainBody from './components/mainBody';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

const App = (props) => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <MainBody />
  </ThemeProvider>
);

export default App;
