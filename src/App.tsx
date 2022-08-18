import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/menu.css'
import Today from './components/clock/clock';
import Logo from './components/logo/logo';
import {
  Link
} from "react-router-dom";
import styled from "styled-components";
// React-Router-dom v6(참고하세용)
// v5 → v6 넘어가면서 Switch 기능 삭제
const StyledLink = styled(Link)`
  text-decoration:none;
  color: white;
  display: block;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  font-family: "Trebuchet MS", Dotum, Arial;
  &:hover{
    color: red;
    background-color: #4d4d4d;
  }
`;

function App() {
  return (
    <div>
      <nav id="TopMenu">
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/portfoilo">portfoilo</StyledLink>
          </li>
          <li>
            <StyledLink to="/GithubPage">Github</StyledLink>
          </li>
          <li>
            <StyledLink to="/Blog">Blog</StyledLink>
          </li>
        </ul>
      </nav>
      <Today />
      <Logo />
    </div>
  );
}


function Home(){
  return <h2>Home</h2>
}
function Portfoilo(){
  return <h2>Portfoilo</h2>
}
export default App;
