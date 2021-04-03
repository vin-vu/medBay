import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import MainBody from './components/mainBody.jsx';

const App = (props) => {

  return (
    <div id="bigBoyBody">
      <Navbar />
      <MainBody />
    </div>
  );
};

export default App;
