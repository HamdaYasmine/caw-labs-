import React, { useState } from 'react';

function DisplayTab({ initialTab }) {
  const [tab, setTab] = useState(initialTab);

  const removeItem = (index) => {
    const newTab = tab.filter((_, i) => i !== index);
    setTab(newTab);
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index} onClick={() => removeItem(index)} style={{ cursor: 'pointer' }}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab;