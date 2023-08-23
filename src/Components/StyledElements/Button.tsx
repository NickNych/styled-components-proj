import styled from "styled-components";
// import {MyAnimation} from "../styles/Animations";


export const StyledBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${props=> props.color || "#fb3788"};
  //background-color: #fb3788;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
  
  &:hover {
    background-color: #4053cc
  }
`

