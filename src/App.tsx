import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./Components/StyledElements/Button";
import {myTheme} from "./Components/styles/Theme.styled";


function App() {
    return (
        <div className="App">

            <Box>
                <StyledBtn btnType={"primary"} color={myTheme.colors.primary}  >Hello</StyledBtn>
                <StyledBtn btnType={"outlined"} color={myTheme.colors.secondary} >Hello</StyledBtn>
                <StyledBtn active >hello</StyledBtn>
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


