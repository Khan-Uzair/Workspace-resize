import React from "react";
import { StyledSideMenu } from "./styled";

export default class SideMenu extends React.Component {
  state = {
    toggles: {}
  };

  render() {
    const { children, activeMenuItemId, ...props } = this.props;
    return (
      <StyledSideMenu {...props}>
        {children.map((child, i) => {
          return React.cloneElement(child, {
            ...child.props,
            isSelected: activeMenuItemId === child.props.id,
            key : i
          });
        })}
      </StyledSideMenu>
    );
  }
}
