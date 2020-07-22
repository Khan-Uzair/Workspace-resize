import React, { createRef } from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StyledPanel, StyledCanvas, StyledWorkspaceTemplate } from "./styled";
import { ResizableWrapper } from "@invent/resizable-wrapper";

import styled from "styled-components";
import ResizableOverlay from "../../OverlayPanel/src";

import SideBar from "@invent/side-bar";

class Workspace extends React.Component {
  state = {
    activeToggle: "",
    isPanelOpen: false,
    panelWidth: this.props.panelWidth || 169,
    // startRightmove: false,
    // tableInitialLeftPosition: 0,
    // tableInitialRightPosition: 0,
    isOverlayOpen: false,
    overlayPanelWidth: 0
  };
  noop = () => {
  }
  canvasRef = createRef();

  onMenuItemClick = event => {
    const {
      target: { id }
    } = event;
    const { panelMetadata } = this.props;
    const { panelWidth } = this.state;
    const {
      togglePanel,
      callback
    } = panelMetadata[id] || {};

    // const tablePositions = this.getTablePositions();

    // togglePanel && this.setState(prevState => ({
    //   isPanelOpen: prevState.activeToggle !== id || !prevState.isPanelOpen,
    //   activeToggle: prevState.activeToggle === id ? "" : id,
    //   tableInitialLeftPosition: tablePositions.tableLeftPosition,
    //   tableInitialRightPosition: tablePositions.tableRightPosition
    // }));

    //callback operation
    if (callback && typeof callback === "function") {
      callback(event);
    }
  };

  getTablePositions = () => {
    const element = document.getElementById('main-canvas');
    const position = element.getBoundingClientRect();
    const tableLeftPosition = position.left;
    const tableRightPosition = position.right;
    return {tableLeftPosition, tableRightPosition};
  };

  onCloseIconClick = () => {
    this.setState({
      isPanelOpen: false,
      activeToggle: ""
    });
  };
  getPanelWidth = updatedWidth => {
    const { panelWidth, tableInitialLeftPosition } = this.state;

    // const tablePositions = this.getTablePositions();
    // if ((updatedWidth + 44) <=  tableInitialLeftPosition) {
    //   this.setState({
    //     startRightmove: false,
    //     panelWidth: updatedWidth
    //   });
    // } else if ((updatedWidth + 44) > tablePositions.tableLeftPosition) {
    //     this.setState({
    //       startRightmove: true,
    //       panelWidth: updatedWidth
    //     });
    // } else {
    //   this.setState({
    //     panelWidth: updatedWidth
    //   });
    // }
    this.setState({
      panelWidth: updatedWidth
    });
  };

  overlayPanelToggleHandler = ({
    overlayOpen, panelWidth
  }) => {
    this.setState({
      isOverlayOpen: overlayOpen,
      overlayPanelWidth: panelWidth
    });

    // document.getElementById('main-canvas').scrollLeft = 0;
  };

  overlayPanelInprogress = panelWidth => {
    document.getElementById('main-canvas').scrollLeft = 0;
  }
  
  render() {
    console.log('Rendered again');
    const { isPanelOpen, activeToggle, panelWidth, isOverlayOpen, overlayPanelWidth } = this.state;
    const { panelMetadata, canvasContent, className, overlayWidth } = this.props;

    const StyledResizableOverlay = styled(ResizableOverlay)`
      top: 7px;
      right: 10px;
    `;
    const customStyles = {
      top: "7px",
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
    return (
    
      <StyledWorkspaceTemplate id="workspace" className={classNames('invent-workspace', className)}>
        <SideBar
          onMenuItemClick={this.onMenuItemClick}
          activeMenuItemId={activeToggle}
          filterCount={panelMetadata && panelMetadata.filtersIcon && panelMetadata.filtersIcon.filterCount}
          hideIcon={panelMetadata ? Object.fromEntries(Object.entries(panelMetadata).map(([k, v]) => [k, !!v.hidden])) : {}}
        />
        <ResizableWrapper className='resizable-sidebar-wrapper' onResizeEnd={this.getPanelWidth}>
          <StyledPanel
            key="panel"
            isPanelOpen={isPanelOpen}
            resizeDir="right"
            minWidth={170}
            maxWidth={530}
            title={ activeToggle && panelMetadata[activeToggle]?.title}
            onCloseIconClick={this.onCloseIconClick}
            width={panelWidth}
          >
            {activeToggle && panelMetadata[activeToggle]?.content}
          </StyledPanel>
        </ResizableWrapper>

        <StyledCanvas id="main-canvas"
          ref={this.canvasRef}
          panelWidth={panelWidth}
          overlayPanelWidth={overlayWidth}
          isPanelOpen={isPanelOpen}
          isOverlayOpen={isOverlayOpen}>
          {canvasContent}
        </StyledCanvas>
        
        <StyledResizableOverlay
          customStyles={customStyles}
          content={<StyledPanelContent />}
          title="Performance"
          overlayPanelToggle={ this.overlayPanelToggleHandler }
          overlayPanelInprogress
          isOverlayOpen={ isOverlayOpen }
          overlayPanelWidth={ overlayPanelWidth }
          overlayPanelInprogress={this.overlayPanelInprogress}
        />
      </StyledWorkspaceTemplate>
    
    );
  }
}

export default Workspace;


Workspace.propTypes = {
  panelWidth:PropTypes.number,
  panelMetadata: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.Component
  }),
  canvasContent: PropTypes.Component,
  isOverlayOpen: PropTypes.bool,
  overlayWidth: PropTypes.number
};