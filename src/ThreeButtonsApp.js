import React, { useState } from 'react';

function ThreeButtonsApp() {
  const [lastClicked, setLastClicked] = useState(null);

  return (
    <div>
      <button onClick={() => setLastClicked(1)}>Button1</button>
      <button onClick={() => setLastClicked(2)}>Button2</button>
      <button onClick={() => setLastClicked(3)}>Button3</button>
      
      {lastClicked && (
        <p>Button #{lastClicked} was clicked</p>
      )}
    </div>
  );
}

export default ThreeButtonsApp;