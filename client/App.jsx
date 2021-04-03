import React, { useState } from 'react';

const App = (props) => {
  const [myState, setMyState] = useState({
    message: 'Here is my state!',
    otherMessage: 'Here is another message'
  });
  return (
    <div id='bigBoyBody'>
      <section id='navBarPlaceholder'>{myState.message}</section>
      <section id='bodyPlaceholder'>{myState.otherMessage}</section>
    </div>
  )
}