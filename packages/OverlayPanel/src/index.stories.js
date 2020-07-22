import React from "react";
import styled from 'styled-components';
import ResizableOverlay from ".";
import Overlay from "./Overlay";
export default { title: "Overlay" };
const customStyles = {
    top: "10px",
    right: "10px"
}
const StyledPanelContent = styled.section`
  width: 80%;
  height: 50%;
  margin: 5% auto auto 10%;
  background: ${props => props.theme.tescoBlueDark};
  color: #ffffff;
  text-align: center;
`;
export const OverlayPanel = () => (
  <Overlay resizeDir="left" minWidth={200}
      maxWidth={600}
      width={300}
      title="Overlay"
      isOverlayOpen={true}>
  </Overlay>
);
export const ResizableOverlayPanel = () => (
  <ResizableOverlay customStyles={customStyles} content={<StyledPanelContent/>} title="Performance" />
);