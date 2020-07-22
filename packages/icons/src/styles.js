import styled, { css } from "styled-components";
import { media } from "@beans/foundation";

const menuIconStyling = css`
  width: 44px;
  height: 48px;
  border: none;
  text-align: center;
  line-height: 48px;
  cursor: pointer;

  svg {
    pointer-events: none;
    margin: 14px 4px 14px 4px;
    ${media.belowMobileLarge`margin: 12px 4px 12px 4px;`}
  }

  ${props => props.mobileOnly && media.aboveMobileLarge`display: none;`};
  ${props => props.mobileOnly && media.belowMobileLarge`margin-left: auto;`};
  ${props => props.stickyIcon && media.aboveMobileLarge`margin-top: auto;`};
`;
export const StyledResizeIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: col-resize;
  top: 50%;
  ${props =>
    props.align === "left"
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}
`;

export const StyledMenuIcon = styled.div`

${menuIconStyling};
  background: ${props =>
    props.isSelected
      ? props.theme.tescoHighlightSelected
      : props.theme.tescoBlueDark}

  &:hover {
    opacity: ${props => (props.isSelected ? 1 : 0.6)};
    background: ${props => props.theme.tescoHighlightSelected};
  }
  
  

  
  
`;

export const StyledCloseIcon = styled.div`
  width: 40px;
  height: 40px;
  float: right;
  margin: 13px 12px 13px auto;
  cursor: pointer;
`;

export const StyledAnalysisIcon = styled.div`
  ${menuIconStyling};
  width: 40px;
  height: 40px;

  border-radius: 20px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.4);
  svg {
    margin: 11px 4px 6px 4px;
  }

  background: ${props =>
    props.isSelected
      ? props.theme.tescoHighlightSelected
      : props.theme.tescoPeacockBlue};

  &:hover {
    opacity: ${props => (props.isSelected ? 1 : 0.6)};
    background: ${props => props.theme.tescoHighlightSelected};
  }
`;
