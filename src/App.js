import React, { useEffect } from 'react';
import './App.css';
import { Laptop } from './Components/appcomp';

function App() {
  useEffect(() => {
    document.title = "Startup Page";})

  return (
    <div>
      <Laptop/>
    </div>
  );
}

export default App;
