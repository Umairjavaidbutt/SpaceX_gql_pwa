import React, { useState } from 'react';
import './App.css';
import LaunchContainer from './components/Launch';
import LaunchDetailsContainer from './components/LaunchDetails';

function App() {
  const [id, setId] =useState(13);
  const handleIdChange = (newId: number) => {
    setId(newId)
  }

  return (
    <div className="App">
      <LaunchContainer handleIdChange= {handleIdChange}/>
      <LaunchDetailsContainer id = {id}/>
    </div>
  );
}

export default App;