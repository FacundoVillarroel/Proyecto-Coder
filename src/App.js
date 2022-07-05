import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from "./components/Landing";
import Sitio from "./components/Sitio";

import './App.css';

function App() {
  return (
    <div className='body'>
      <Landing/>
      <Sitio/>
    </div>
  );
}

export default App;
