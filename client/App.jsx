import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
// import MainBody from './components/mainBody';

const App = (props) => {

  return (
    <div id="bigBoyBody">
      <Navbar />
      <section id="bodyPlaceholder"></section>
    </div>
  );
};

export default App;
