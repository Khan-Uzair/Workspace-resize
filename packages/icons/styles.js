
import styled, {css}  from 'styled-components';
export const StyledResizeIcon = styled.div`
    position: relative;
    cursor: col-resize;
    top: 50%;
    ${props => props.align === "left" ? css`
        left: 10px;
        `: css`
        right : 10px;
        `
    }
`;