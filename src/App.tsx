import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <menu>
        <ul>
          <li><a href="#">menu item 1</a></li>
          <li><a href="#">menu item 2</a></li>
          <li><a href="#">menu item 3</a></li>
        </ul>
      </menu>

      <Box>
    <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
    <StyledBtn as="a" href={"#"}>Link</StyledBtn>
    <StyledBtn>button</StyledBtn>
        <SuperButton>Super Button</SuperButton>
      </Box>
    </div>
  );
}

export default App;



const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
`
const Link = styled.a`
  color: #003dfd;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`
const SuperButton= styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: #363636;
`
const Box = styled.div`
height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
  }
  ${Link}{
    cursor: zoom-in;
  }
`
const Menu = styled.nav
