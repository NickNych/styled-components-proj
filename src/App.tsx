import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./Components/StyledElements/Button";


function App() {
    return (
        <div className="App">

            <Box>
                <StyledBtn color={'red'}>hello</StyledBtn>
                <StyledBtn>hello</StyledBtn>
                {/*<input type="range"></input>*/}
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
  gap: 20px;

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`


