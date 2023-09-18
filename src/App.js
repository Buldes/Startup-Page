import React, { useEffect } from 'react';
import './App.css';
import { Laptop } from './Components/appcomp';
import { GetAspectRatio } from './Functions/sceen';
import { setDefaultHeight } from './variables/int';
import { LaptopSettings } from './Components/settingsComp';
import { RefreshVariable } from './Functions/Datadealer';
import { menu } from './variables/str';

function App() {
  useEffect(() => {document.title = "Startup Page";})

  // check apect ratio
  if (GetAspectRatio() <= 1){
    setDefaultHeight(10)
  }

  //Refresh all variables
  RefreshVariable()
  
  // home or settings menu
  
  if (menu === "main"){
    return(
      <Laptop/>
    )
  }
  else if (menu === "settings"){
    return(
      <LaptopSettings/>
    )
  }
  
}

export default App;
