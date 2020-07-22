import styled, { css } from "styled-components";
import { media } from "@beans/foundation";
import {Panel} from "@invent/panel";
import Canvas from "@invent/canvas";

export const StyledWorkspaceTemplate = styled.div`
  // display: grid;
  display: flex;
  grid-template-columns: 44px 0 auto 2px;
  ${media.belowMobileLarge`grid-template-columns:0 1fr 0;`}
  width: 100vw;
  .resizable-sidebar-wrapper {
    position: relative;
    svg {
      position: absolute;
      right: -10px;
      z-index: 2;
    }
  }
  .main-canvas {
    padding: 0 !important;
  }
`;

export const StyledPanel = styled(Panel)`
  ${media.aboveMobileLarge`
  height: 100vh;
  top: 0;
  ~ svg {
    display: none;
  }
  width: 0;
  transition: 0.5s;
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
  height: 0;
  left: 0;
  top: 0;
  width: 100vw;
  transition: 0.5s;
  z-index: 1;
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

export const StyledCanvas = styled(Canvas)`
  width: 100%;
  transition: margin-left 0.5s;
  margin: 0 auto;
  padding: 15px 0;
  ${media.belowMobileLarge`margin-left: 0;`}
  // box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.15);
  background-color: #f0f0f0;
  box-shadow: none;
    
`;
//final
// ${props =>
//   props.isPanelOpen &&
//   css`
//     margin: 0 auto 0 calc(${props.panelWidth}px - 18px);
//     transition: margin-left 0.5s;
//   `}


// ${props =>
//   props.isPanelOpen &&
//   !props.isOverlayOpen &&
//   props.startRightmove &&
//   css`
//     margin: 0 auto 0 calc(${props.panelWidth}px - 18px);
//     transition: margin-left 0.5s;
//   `}
// ${props =>
//   props.isOverlayOpen && (props.overlayPanelWidth > 0) &&
//   !props.isPanelOpen &&
//   css`
//     margin: 0 ${props.overlayPanelWidth + 60}px 0 auto;
//     transition: margin-left 0.5s;
// `}
// ${props =>
// props.isPanelOpen &&
// props.isOverlayOpen &&
// css`
//   margin: 0 auto 0 calc(${props.panelWidth}px - 18px);
//   transition: margin-left 0.5s;
// `}