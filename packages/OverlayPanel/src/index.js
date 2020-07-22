import React from "react";
import classNames from 'classnames';
import { ResizableWrapper } from "../../ResizableWrapper/src"; //bring back "@invent/resizable-wrapper"
import Overlay from "./Overlay";
import { StyledOverlayContainer, StyledAnalysisIcon } from "./styles";
import PropTypes from 'prop-types';

export default class ResizableOverlay extends React.Component {
  state = {
    // isOverlayOpen: false,
    increasedWidth: 0
  };

  onClick = event => {
    const { overlayPanelToggle } = this.props;
    // const { isOverlayOpen, increasedWidth } = this.state;
    // this.setState((prevState) => ({
    //   isOverlayOpen: !prevState.isOverlayOpen
    // }));
    overlayPanelToggle({
      overlayOpen: true,
      panelWidth: 550
    });
  };
  onCloseIconClick = event => {
    const { overlayPanelToggle } = this.props;
    // this.setState({
    //   isOverlayOpen: false
    // });
    overlayPanelToggle({
      overlayOpen: false,
      panelWidth: 0
    });
  }
  getPanelWidth = updatedWidth => {
    debugger;
    const { overlayPanelToggle } = this.props;
    const { isOverlayOpen } = this.state;
    // this.setState({
    //   increasedWidth: updatedWidth
    // });
    overlayPanelToggle({
      overlayOpen: true,
      panelWidth: updatedWidth
    });
  };
  render() {
    // const { isOverlayOpen } = this.state;
    const { title, content, className, isOverlayOpen, overlayPanelWidth } = this.props;
    const { increasedWidth } = this.state;
    return (
      <StyledOverlayContainer className={classNames('invent-overlay-panel', className)}>
        <StyledAnalysisIcon onClick={this.onClick} isContentOpen={isOverlayOpen} />
        <ResizableWrapper onResizeEnd={this.getPanelWidth} onResizeProgress={this.props.overlayPanelInprogress}>
          <Overlay resizeDir="left" minWidth={550}
            maxWidth={900}
            width={550}
            title={title}
            isOverlayOpen={isOverlayOpen}
            isPanelOpen={isOverlayOpen}
            onCloseIconClick={this.onCloseIconClick}>
            {content}
          </Overlay>
        </ResizableWrapper>
      </StyledOverlayContainer>
    );
  }
}

ResizableOverlay.propTypes = {
  overlayPanelToggle: PropTypes.func.isRequired,
  isOverlayOpen: PropTypes.bool
};
// ResizableOverlay.defaultProps = {
//   isOverlayOpen: false
// };
