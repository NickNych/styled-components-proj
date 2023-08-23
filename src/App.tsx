import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./Components/StyledElements/Button";


function App() {
    return (
        <div className="App">

            <Box>
                {/*<StyledBtn color="green" fontSize={"20px"}>hello</StyledBtn>*/}
                {/*<StyledBtn color="red">hello</StyledBtn>*/}
                <StyledBtn primary>hello</StyledBtn>
                <StyledBtn outline>hello</StyledBtn>
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

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`


