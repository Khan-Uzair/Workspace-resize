import React from 'react';



export default ({ onMenuItemClick, activeMenuItemId }) => {
  return (
    <StyledSideBar>
      <SideMenu onClick={onMenuItemClick} activeMenuItemId={activeMenuItemId}>
        <FiltersIcon id="filters-icon" />
        <StarIcon id="star-icon" />
        <SettingsIcon id="settings-icon" />
        <AddIcon id="add-icon" stickyIcon />
        <AnalysisIcon id="analysis-icon" mobileOnly />
      </SideMenu>
    </StyledSideBar>
  )
}