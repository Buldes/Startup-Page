import React, { useEffect } from 'react';
import './App.css';
import { Laptop } from './Components/appcomp';
import VideoBackground from './Background/Backdorund';
import bg1 from "./Background/bg1.mp4"
import { DefaultDropBox } from './DropBox/defaultDropBox';

function App() {
  useEffect(() => {
    document.title = "Startup Page";})

  return (
    <div>
      <VideoBackground bg={bg1}/>
      <Laptop/>
      <DefaultDropBox options={["Test1", "test2"]}/>
    </div>
  );
}

export default App;
