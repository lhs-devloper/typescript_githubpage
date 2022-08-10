import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Today from './components/clock';
import Logo from './components/logo';
function App() {
  return (
    <div className="App">
      <div className='Test'>
        <Today />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default App;
