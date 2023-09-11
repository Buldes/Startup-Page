import React, { useEffect } from 'react';
import './App.css';
import { Laptop } from './Components/appcomp';
import { GetAspectRatio } from './Functions/sceen';
import { defaultHeight, setDefaultHeight } from './variables/int';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LaptopSettings } from './Components/settingsComp';
import { RefreshVariable } from './Functions/Datadealer';

function App() {
  useEffect(() => {document.title = "Startup Page";})

  // check apect ratio
  if (GetAspectRatio() <= 1){
    setDefaultHeight(10)
  }

  //Refresh all variables
  RefreshVariable()
  
  // Überprüfen, ob die aktuelle URL nicht "website/test" ist
  if (window.location.pathname !== "/Startup-Page/" && window.location.pathname !== "/Startup-Page/settings") {
    // Weiterleitung zur Unterseite website/test
    window.location.href = "/Startup-Page/";
  }
  

  return (
    <Router>
      <Routes>
        <Route path="/Startup-Page/settings" element={<LaptopSettings/>} />
        <Route path="/Startup-Page/" element={<Laptop/>} />
      </Routes>
    </Router>
  );
}

export default App;
