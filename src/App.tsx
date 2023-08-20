import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Box>
    <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
    <StyledBtn as="a" href={"#"}>Link</StyledBtn>
    <StyledBtn>button</StyledBtn>
        <SuperBtn>Super Button</SuperBtn>
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
`
const SuperBtn= styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: #363636;
`
const Box = styled.div`
height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
