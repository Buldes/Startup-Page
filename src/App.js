import React, { useEffect } from 'react';
import './App.css';
import { Laptop } from './Components/appcomp';

function App() {
  useEffect(() => {
    document.title = "Startup Page";})

  return (
    <Laptop/>
  );
}

export default App;
