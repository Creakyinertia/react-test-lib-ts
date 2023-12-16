import React from 'react';
import './App.css';
import { Application } from './application/application';
<<<<<<< HEAD
import Counter from './components/counter/counter';

=======
import Skills from './skills/skills';
>>>>>>> 2d8c5ecf92f21e0badb194a9a3e2bb06a8460047

function App() {
  const skills=['html','css','js']
  return (
    <div className="App">
      <Application/>
<<<<<<< HEAD
      <Counter/>
=======
      <Skills skills={skills}/>
>>>>>>> 2d8c5ecf92f21e0badb194a9a3e2bb06a8460047
    </div>

  );
}

export default App;
