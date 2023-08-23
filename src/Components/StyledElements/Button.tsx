import styled from "styled-components";
// import {MyAnimation} from "../styles/Animations";


type StyledBtnPropsType = {
    color?: string;
    fontSize?: string
    primary?: boolean
    outline?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  background-color: ${props => props.color|| "#fb3788"};
  padding: 10px 20px;
  color: snow;
  //font-size: 2rem;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;
  
  &:hover {
    background-color: #4053cc;
  }
  
`
