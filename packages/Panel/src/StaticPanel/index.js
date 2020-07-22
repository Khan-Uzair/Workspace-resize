import React from "react";
import PropTypes from 'prop-types';
import PanelHeader from "@invent/panel-header";
import { StyledPanel } from "./styles";

function Panel({ children, title, onCloseIconClick, ...props }) {
  return (
    <StyledPanel {...props}>
      <PanelHeader onCloseIconClick={onCloseIconClick}>{title}</PanelHeader>
      {children}
    </StyledPanel>
  );
}

export default Panel;

Panel.propTypes = {
  children: PropTypes.children,
  title: PropTypes.string,
  onCloseIconClick: PropTypes.func
};


