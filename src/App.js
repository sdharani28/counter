import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

import Clock from "./Clock";

function App() {
  const [showTime, setShowTime] = useState(false);
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        {showTime && <Clock />}
        <button onClick={() => setShowTime(previous => !previous)} >{showTime ? 'Hide time' : 'Show time'}</button>
      </div>
  );
}

export default App;
