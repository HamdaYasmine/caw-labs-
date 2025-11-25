import React, { useState } from 'react';

function ToggleButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const isOddClick = clickCount % 2 === 1;

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {clickCount > 0 && (
        <p>{isOddClick ? 'Clicked' : 'Not Clicked'}</p>
      )}
    </div>
  );
}

export default ToggleButton;