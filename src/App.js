import React from 'react';
import ClickMe from './ClickMe';
import ToggleButton from './ToggleButton';
import ThreeButtonsApp from './ThreeButtonsApp';
import Counter from './Counter';
import TabApp from './TabApp';
import UserAuth from './UserAuth';
import DivCreator from './DivCreator';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Lab5 exercices</h1>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Exo 1.1: ClickMe</h2>
        <ClickMe />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Exo 1.2: Toggle Button</h2>
        <ToggleButton />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Exo1.3: Three Buttons</h2>
        <ThreeButtonsApp />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Exeo1.4: Counter</h2>
        <Counter />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Exo 2: Display Tables</h2>
        <TabApp />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Exercise 3: User Authentication</h2>
        <UserAuth />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Exercise 4: Div Creator</h2>
        <DivCreator />
      </section>
    </div>
  );
}

export default App;


