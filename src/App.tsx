import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Today from './components/clock/clock';
import Logo from './components/logo/logo';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
        </nav>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/portfoilo">
          <Portfoilo />
        </Route>
      </div>
    </Router>
  );
}


function Home(){
  return <h2>Home</h2>
}
function Portfoilo(){
  return <h2>Portfoilo</h2>
}
export default App;
