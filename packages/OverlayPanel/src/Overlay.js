import React from "react";
import { StyledOverlay, StyledPanelBody } from "./styles";
import PanelHeader from '@invent/panel-header';

function Overlay({children, title, onCloseIconClick, ...props}) {

    return (
            <StyledOverlay {...props}>
                <PanelHeader showCloseIcon={props.isOverlayOpen} onCloseIconClick={onCloseIconClick} {...props}>{title}</PanelHeader>
                <StyledPanelBody>
                    {children}
                </StyledPanelBody>
            </StyledOverlay>
      );
}

export default Overlay;
