import styled from "styled-components";
import { media } from '@beans/foundation';

export const StyledPanelHeader = styled.header`
  width: auto;
  height: 47px;

  & p {
    color: white;
    margin: 16px auto 15px 12px;
    width: 43px;
    height: 20px;
    font-size: 14px;
    position: absolute;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  & svg {
    float: right;
  }
  ${media.aboveMobileLarge`& #close-icon {
    display: ${props => props.showCloseIcon? "block": "none" }
  }`}
`;

export const StyledPanelHeaderBorder = styled.div`
  width: auto;
  height: 1px;
  opacity: 0.2;
  background-color: #ffffff;
`;
