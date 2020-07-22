import React from 'react';
import PropTypes from 'prop-types';
import { StyledPanelHeader, StyledPanelHeaderBorder } from './styles';
import { CloseIcon } from "@invent/icons";
import { BodyText } from '@beans/typography';


const PanelHeader = ({ children, onCloseIconClick, showCloseIcon=false }) => {
    return (
        <>
        <StyledPanelHeader showCloseIcon={showCloseIcon}>
            <BodyText>{ children }</BodyText>
            <CloseIcon id='close-icon' onClick={onCloseIconClick}/>
        </StyledPanelHeader>
        <StyledPanelHeaderBorder />
        </>
    )
}

export default PanelHeader;

PanelHeader.propTypes = {
    children: PropTypes.children,
    onCloseIconClick: PropTypes.func,
    showCloseIcon: PropTypes.bool
};

