import React from 'react';
import SideBar from '.';
export default { title: 'SideBar'};

const hideIcon = {
    "filtersIcon": false,
    "settingsIcon": false,
    "starIcon": false,
    "addIcon": true,
    "analysisIcon": false
};

export const SideBarDefault = () => (
    <SideBar onMenuItemClick={() => {}} activeMenuItemId='' filterCount={2} hideIcon={hideIcon}/>
)