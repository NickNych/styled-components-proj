import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./Components/StyledElements/Button";
import {Link} from "./Components/StyledElements/Link";
import {Menu} from "./Components/StyledElements/Menu";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="https://uk.javascript.info/">menu item 1</a></li>
          <li><a href="https://uk.javascript.info/">menu item 2</a></li>
          <li><a href="https://uk.javascript.info/">menu item 3</a></li>
        </ul>
      </Menu>

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
  
@media screen and (max-width: 800px){
  flex-direction: column;
}
`


