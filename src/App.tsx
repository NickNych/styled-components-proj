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


