import React, { useState } from 'react';
import Navbar from './components/navbar';
import MainBody from './components/mainBody';

const App = (props) => (
  <div id="bigBoyBody">
    <Navbar />
    <MainBody />
  </div>
);

export default App;
