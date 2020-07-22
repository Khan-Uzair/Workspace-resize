import styled, { css } from 'styled-components';
import { media } from '@beans/foundation';
import { AnalysisIcon } from "@invent/icons";

export const StyledAppBody = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export const StyledOverlay = styled.div`
  background-color: ${props => props.theme.tescoBlueDarker};
  top: 0;
  right: 0;
  transition: 0.5s;
  z-index: 1;
  ~ svg {
    display: none;
    z-index: 2;
  }
  > *{
    display: none;
  }
  ${media.aboveMobileLarge`
  height: 100vh;
  color: white;
  width: 0px;
  ${props =>
      props.isOverlayOpen &&
      css`
      width: ${props => props.width}px;
      ~ svg {
        display: block;
      }
      > *{
        display: block;
      }
    `}
  `}
  ${media.belowMobileLarge`
  width: 100vw;
  height: 0px;
  position: fixed;
  ${props =>
      props.isOverlayOpen &&
      css`
        height: 100vh;
        > *{
          display: block;
        }
    `}
  `}
`;

export const StyledPanelBody = styled.div`
  overflow-x:scroll;
  height: 100vh;
`

export const StyledAnalysisIcon = styled(AnalysisIcon)`
  border-radius: 100%;
  &:hover {
    opacity: 1;
  }
  position: absolute;
  top:10px;
  right:10px;
  ${media.aboveMobileLarge`
    display: ${props => props.isContentOpen ? "none" : "block"};
  `}

  ${media.belowMobileLarge`
    display: "none";
  `}
`;

export const StyledOverlayContainer = styled.div`
  ${props => css`
    top: ${props.top};
    right: ${props.right};
  `}
  .invent-resizable-wrapper {
    position: relative !important;
    svg:nth-child(2) {
      position: absolute;
      left: -10px;
    }
  }
`;