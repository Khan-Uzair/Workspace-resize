import styled from 'styled-components';

export const StyledToggleComponent = styled.button` 
  width: 50px;
  height: 24px;
  background-color: ${props => props.isSelected ? "#007eb3" : "#f0f0f0"} ;
  &:focus{
    outline:none;
    box-shadow:none
  }
  &:first-child {
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
  }
  &:last-child{
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }
  & label {
    width: 34px;
    height: 16px;
    font-family: "TESCO Modern",Arial,sans-serif;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color:${props => props.isSelected ? "#ffffff" : "#00539f"} ;
  }
  

`;