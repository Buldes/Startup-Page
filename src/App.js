import React, { useEffect } from 'react';
import './App.css';
import { LinkButton } from './Components/LinkButtons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  useEffect(() => {
    document.title = "Startup Page";})

  return (
    <div style={{position:'relative', top:"10px"}}>
      <LinkButton icon={faGithub}/>
  
    </div>
  );
}

export default App;
