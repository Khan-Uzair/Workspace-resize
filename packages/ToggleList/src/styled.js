import styled from 'styled-components';

export const StyledToggleListContainer = styled.div`
  width: ${props => props.width ? props.width + 'px' : '100px'};
  height: 24px;
  border-radius: 14px;
  border: solid 1px #cccccc;
  background-color:${props => props.primary ? "#007eb3" : "#e5e5e5"};
`;




