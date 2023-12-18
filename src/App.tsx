import React from 'react';
import './App.css';
import Assigned from './components/assigned/assigned';
// import { Application } from './application/application';
// import Skills from './skills/skills';

function App() {
  // const skills=['html','css','js']
  return (
    <div className="App">
      {/* <Application/>
      <Skills skills={skills}/> */}
      <Assigned />
    </div>
  );
}

export default App;
