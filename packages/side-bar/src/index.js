import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledSideBar, StyledFiltersIconWrapper, StyledBadge } from "./styled";
import {
  SettingsIcon,
  FiltersIcon,
  StarIcon,
  AddIcon,
  AnalysisIcon
} from "@invent/icons";
import { 
  ADD_ICON,
  FILTERS_ICON,
  STAR_ICON,
  SETTINGS_ICON,
  ANALYSIS_ICON
 } from './constants';
import SideMenu from "./SideMenu";

const SideBar = ({ onMenuItemClick, activeMenuItemId, className, filterCount, hideIcon }) => {
  return (
    <StyledSideBar className={classNames('invent-sidebar', className)}>
      <SideMenu onClick={onMenuItemClick} activeMenuItemId={activeMenuItemId}>
        {!hideIcon[FILTERS_ICON] ? (
          <StyledFiltersIconWrapper>
            { filterCount > 0 && 
              <StyledBadge>{filterCount}</StyledBadge>
            }
            <FiltersIcon id={FILTERS_ICON} />
          </StyledFiltersIconWrapper>): <></>}
        {!hideIcon[STAR_ICON] ?  (<StarIcon id={STAR_ICON} />): <></>}
        {!hideIcon[SETTINGS_ICON] ?  (<SettingsIcon id={SETTINGS_ICON} />): <></>}
        {!hideIcon[ADD_ICON] ?  (<AddIcon id={ADD_ICON} stickyIcon />): <></>}
        {!hideIcon[ANALYSIS_ICON] ?  (<AnalysisIcon id={ANALYSIS_ICON} mobileOnly />): <></>}
      </SideMenu>
    </StyledSideBar>
  );
};


SideBar.propTypes = {
    onMenuItemClick: PropTypes.func,
    activeMenuItemId: PropTypes.string,
    filterCount: PropTypes.number,
    hideIcon: PropTypes.object.isRequired
}

SideBar.defaultProps = {
  filterCount: 0
}

export default SideBar;






