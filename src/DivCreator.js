import React, { useState } from 'react';

function DivCreator() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newDiv = {
      id: Date.now(),
      width: width + 'px',
      height: height + 'px',
      backgroundColor
    };
    
    setDivs([...divs, newDiv]);
    setWidth('');
    setHeight('');
    setBackgroundColor('#ffffff');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Width (px): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
            min="1"
          />
        </div>
        <div>
          <label>Height (px): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            min="1"
          />
        </div>
        <div>
          <label>Background Color: </label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <button type="submit">Create Div</button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {divs.map(div => (
          <div
            key={div.id}
            style={{
              width: div.width,
              height: div.height,
              backgroundColor: div.backgroundColor,
              border: '1px solid #000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {div.width} × {div.height}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DivCreator;