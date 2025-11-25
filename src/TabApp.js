import React from 'react';
import DisplayTab from './DisplayTab';

function TabApp() {
  const tab1 = ['hello', 'world', 'from', 'react'];
  const tab2 = ['hello', 'world', 'from', 'react'];

  return (
    <div>
      <h2>First Table</h2>
      <DisplayTab initialTab={tab1} />
      
      <h2>Second Table</h2>
      <DisplayTab initialTab={tab2} />
    </div>
  );
}

export default TabApp;