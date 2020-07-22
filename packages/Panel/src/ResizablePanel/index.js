import React from "react";
import { ResizableWrapper } from "@invent/resizable-wrapper";

export default class ResizablePanel extends React.Component {
    state = {
        isPanelOpen: false,
        panelWidth: this.props.panelWidth || 169
    };
    onCloseIconClick = event => {
      this.setState({
        isOverlayOpen: false
      })
    }
    getPanelWidth = updatedWidth => {
        this.setState({
          panelWidth: updatedWidth
        });
      };
    render() {
        const { isPanelOpen, panelWidth } = this.state;
        return (
            <ResizableWrapper onResizeEnd={this.getPanelWidth}>
            <StyledPanel
              key="panel"
              isPanelOpen={isPanelOpen}
              resizeDir="right"
              minWidth={169}
              maxWidth={272}
              width={panelWidth}/>
          </ResizableWrapper>
        );
    }
}
