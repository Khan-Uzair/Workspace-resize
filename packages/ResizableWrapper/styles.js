import styled, { css } from 'styled-components';
import { media } from "@beans/foundation";

export const StyledAppBody = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const OverlayContainer = styled.div`
    ${media.belowMobileLarge`
        width: 100% !important;
    `}
    display: flex;
    height: 85vh;
    position: absolute;
    right: 0;
    justify-content: flex-end;
    flex-direction: row-reverse;
`;

export const StyledResizableWrapper = styled.div`
    ${media.belowMobileLarge`
        width: 100% !important;
    `}
    display: flex;
    height: 100vh;
    ${media.aboveMobileLarge`
        flex-direction: ${props => props.resizeDir === "left" ? "row-reverse" : "row"}
    `}
`;

export const StyledResizeIcon = styled.div`
    ${media.belowMobileLarge`
       display: none;
    `}
    position : relative;
    top: 50%;
    height: 20px;
    ${({ align }) => align === 'left' && css`
        left: 10px;
    `}
    ${({ align }) => align === 'right' && css`
        right: 10px;
    `}
`;