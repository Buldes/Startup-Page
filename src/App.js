import React, { useEffect } from 'react';
import './App.css';
import { GoogleSearchBar } from './Components/GoogleSearch';

function App() {
  useEffect(() => {
    document.title = "Startup Page";})

  return (
    <div style={{position:'relative', top:"10px"}}>
      <GoogleSearchBar left={10}/>
    </div>
  );
}

export default App;
