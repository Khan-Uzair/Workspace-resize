import styled from 'styled-components';
import { media} from '@beans/foundation';

export const StyledSideBar = styled.nav`
  height: 100vh;
  width: 44px;
  z-index: 1;
  left: 0;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.15);
  background-color: ${props => props.theme.tescoBlueDark};
  ${media.aboveMobileLarge`top: 0;`}
  ${media.belowMobileLarge`
    bottom: 0;
    height: 44px;
    width: 100vw;
    position: fixed;
  `}
`;

export const StyledBadge = styled.span`
  top: 3px;
  right: 3px;
  width: 18px;
  height: 18px;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.tescoRed};
  font-size: 12px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const StyledFiltersIconWrapper = styled.div`
  position: relative;
`

export const StyledSideMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100%;
  ${media.belowMobileLarge`
    flex-direction :row;
    height: auto;
  `}
  & ${props => `#${props.activeMenuItemId}`}:hover {
    opacity: 0.6;
    background: ${props => props.theme.tescoHighlightHover}
  }
`;

