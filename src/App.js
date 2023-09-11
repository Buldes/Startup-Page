import React, { useEffect } from 'react';
import './App.css';
import { Laptop } from './Components/appcomp';
import { GetAspectRatio } from './Functions/sceen';
import { defaultHeight, setDefaultHeight } from './variables/int';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LaptopSettings } from './Components/settingsComp';

function App() {
  useEffect(() => {document.title = "Startup Page";})

  console.log(defaultHeight)

  if (GetAspectRatio() <= 1){
    setDefaultHeight(10)
  }
  console.log(defaultHeight)
  
  return (
    <Router>
      <Routes>
        <Route path="/settings" element={<LaptopSettings/>} />
        <Route path="/" element={<Laptop/>} />
      </Routes>
    </Router>
  );
}

export default App;
