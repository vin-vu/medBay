import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
// import MainBody from './components/mainBody';

const App = (props) => {
  const [myState, setMyState] = useState({
    message: 'Here is my state!',
    otherMessage: 'Here is another message',
    hasBeenCalled: false,
  });

  // Showcasing React Hooks
  if (!myState.hasBeenCalled) {
    const otherMessage = 'Look mah, I\'m using React Hooks!';
    const hasBeenCalled = true;
    setMyState({ ...myState, otherMessage, hasBeenCalled });
  }

  return (
    <div id="bigBoyBody">
      <Navbar />
      <section id="bodyPlaceholder">{myState.otherMessage}</section>
    </div>
  );
};

export default App;
