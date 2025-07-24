import React from 'react';
import './App.css';
import background from './assets/background.png';
import tear from './assets/torn-edge.png';
import logo from './assets/logo-emem.png';

function App() {
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="mask top"
        style={{ maskImage: `url(${tear})`, WebkitMaskImage: `url(${tear})` }}
      />
      <div
        className="mask bottom"
        style={{ maskImage: `url(${tear})`, WebkitMaskImage: `url(${tear})` }}
      />
      <div className="content">
        <div
          className="mask bottom"
          style={{ maskImage: `url(${logo-emem})`, WebkitMaskImage: `url(${logo-emem})` }}
        />
        <p className="description">
          Memory is the only thing that remains with you when you die. Accumulating
          memories is cultivating your treasure. Let’s record our memories
          perpetually in the “Ememory”.
        </p>
        <button className="cta">DOWNLOAD NOW</button>
      </div>
    </div>
  );
}

export default App;
