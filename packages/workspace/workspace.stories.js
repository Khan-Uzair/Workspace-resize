import React, { useState } from "react";
import styled from "styled-components";
import Workspace from "./src";
import ResizableOverlay from "../OverlayPanel/src/";

export default { title: "Workspace" };

const StyledResizableOverlay = styled(ResizableOverlay)`
top: 7px;
right: 10px;
`;

const StyledPanelContent = styled.section`
  width: 80%;
  height: 50%;
  margin: 5% auto auto 10%;
  background: ${props => props.theme.tescoBlueDark};
  color: #ffffff;
  text-align: center;
`;

// To scroll horizontaly inside the canvas, provide width to the table or to the table items.
const StyledTable = styled.div`
  width: 1000px;
  display: grid;
  margin: 0 auto;
  background: #fff;
  height: 400px;
  // position: fixed;
  grid-template-columns: 1fr 2fr 2fr 1fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 1fr auto;
  & p {
    border: 2px solid #e5e5e5;
    color: #333333;
    font-weight: bold;
    text-align: center;
  }
`;

const customStyles = {
  top: "7px",
  right: "10px"
}

const Table = () => <StyledTable id='table'>
  <div>Col-1</div>
  <div>Col-2</div>
  <div>Col-3</div>
  <div>Col-4</div>
  <div>Col-5</div>
  <div>Col-6</div>
  <div>Col-7</div>
  <div>Col-8</div>
</StyledTable>;

export const WorkspaceDefault = () => <Workspace />;
const noop = () => { console.log("no -operation") };
const panelMetadata = {
  filtersIcon: {
    title: "Filters",
    content: <StyledPanelContent />,
    callback: noop,
    togglePanel: true,
    filterCount: 2
  },
  settingsIcon: {
    title: "Settings",
    content: <StyledPanelContent />,
    callback: noop,
    togglePanel: true
  },
  starIcon: {
    title: "Favourites",
    content: <StyledPanelContent />,
    callback: noop,
    togglePanel: true,
    hidden: true
  },
  addIcon: {
    callback: () => {
      window.location.href = ''
    }
  },
  analysisIcon: {
    title: "Performance",
    content: <ResizableOverlay customStyles={customStyles} content={<StyledPanelContent />} title="Performance" />,
    callback: noop,
    togglePanel: true,
    hidden: true
  }
};
export const WorkspaceWithPanelContent = () => (
  <Workspace panelMetadata={panelMetadata} canvasContent={<Table />} /> 
);



export const WorkspaceWithOverlayPanel = () => {

  // const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  // const [overlayWidth, setOverlayWidth] = useState(0);

  // const overlayPanelToggleHandler = ({
  //   overlayOpen,
  //   overlayPanelWidth
  // }) => {
  //   setIsOverlayOpen(overlayOpen);
  //   setOverlayWidth(overlayPanelWidth);
  // };

  return (
    <>
      <Workspace
        panelMetadata={panelMetadata}
        canvasContent={<Table />}
        // isOverlayOpen={isOverlayOpen}
        // overlayWidth={overlayWidth}
      />
      {/* <StyledResizableOverlay
        customStyles={customStyles}
        content={<StyledPanelContent />}
        title="Performance"
        overlayPanelToggle={ overlayPanelToggleHandler }
      /> */}
    </>
  )
};
