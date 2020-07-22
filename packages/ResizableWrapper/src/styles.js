import styled, {css}from 'styled-components';
import { media } from '@beans/foundation';

export const StyledResizableWrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: ${props => props.resizeDir==="left"? "row-reverse": "row" };
    width: ${props => props.width}px;
    ${props => props.isDragging && css`
    > div {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        transition: none !important;
        }
    `}
    ${media.belowMobileLarge`
    > svg {
        display: none;
    }
    width: 100vw;
    `}
   
`;