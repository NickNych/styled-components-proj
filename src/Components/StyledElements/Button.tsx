import styled, {css} from "styled-components";
// import {MyAnimation} from "../styles/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined";
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;
  
 
  ${props =>props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props=> props.color || "#fb3788"};
    color: ${props=> props.color || "#fb3788"};
    background-color: transparent;
    &:hover{
      border-color: #4053cc;
      color: #4053cc;
      background-color: transparent;
    }
  `}
   ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
     background-color: ${props=> props.color || "#fb3788"};
     color: snow;
     &:hover {
       background-color: #4053cc
     }
   `}
  //outline
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px #040d49;
  `}
  //primary
  
`

