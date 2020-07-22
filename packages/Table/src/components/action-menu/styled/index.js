import styled from 'styled-components';
import ActionsMenu from '@beans/colleague-actions-menu';
import { primaryTescoBlue, primaryHighlightBlue } from '../../../constants';

export const StyledActionsMenu = styled(ActionsMenu)`
	button {
		box-shadow: none;
		transform: rotate(90deg);
		color: ${props => (props.open ? '#ffffff' : primaryTescoBlue)};
		border: none;
		min-width: 19px;
		width: auto;
		height: auto;
		background: ${props => (props.open ? primaryHighlightBlue : '')};
	}

	button > span > svg {
		width: 70%;
	}

	button > span {
		margin-top: -1px;
	}

	button:hover {
		background: rgba(0, 83, 159, 0.1);
		box-shadow: none;
	}

	button:focus, button:active{
		background: ${props => (props.open ? primaryHighlightBlue : '')};
		box-shadow:none;
	}

	& > ul {
		top: 24px;
	}

	& ~ a, a:hover, a:focus, a:active, a:visited, a:focus-within{
		background-color: ${props => (props.background ? props.background : primaryTescoBlue)};

	}
`;
export default StyledActionsMenu;
