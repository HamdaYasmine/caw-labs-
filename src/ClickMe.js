import React, { useState } from 'react';

function ClickMe() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {isClicked && <p>Clicked</p>}
    </div>
  );
}

export default ClickMe;