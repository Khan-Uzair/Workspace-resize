import styled, { css } from "styled-components";
import { media} from '@beans/foundation';
import StaticPanel from "../StaticPanel";

export const StyledPanel = styled(StaticPanel)`
  ${media.aboveMobileLarge`
  height: 100vh;
  top: 0;
  ~ svg {
    display: none;
  }
  width: 0px;
  
  ${props =>
    props.isPanelOpen &&
    css`
      width: ${props => `${props.width || 169}px`};
      ~ svg {
        display: block;
      }
    `}
  `}
  ${media.belowMobileLarge`
  height: 0px;
  left: 0;
  top: 0;
  width: 100vw;
  transition: 0.5s;
  z-index: 2;
  position: fixed;
  ~ svg {
    display: none;
  }
  ${props =>
    props.isPanelOpen &&
    css`
      height: 100vh;
    `}
  `}
`;