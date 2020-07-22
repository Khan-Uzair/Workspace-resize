import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { primaryTescoBlue } from '../../constants';

/*
SelectBox Usage
	<SelectBox
		id='select-box-1'
		checked={ checked }
		onClick={ this.handleCheckboxChange } //returns {id: 'select-box-1',isChecked: !checked}
		bgColor='#00bfa5'
	/>
*/

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`;

const getBackgroundColor = (props) => {
	if (props.disabled) return '#ccc';
	if (props.checked) return props.bgColor || primaryTescoBlue;
	return '#ffffff';
};

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${props => (props.width ? props.width : '18px')};
  height: ${props => (props.height ? props.height : '18px')};
  background: ${props => getBackgroundColor(props)};
  border: 1px solid #ccc;
  transition: all 150ms; 
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const SelectBox = ({
	className, checked, onClick, id, rowIndex, ...props
}) => (
	<CheckboxContainer
		className={ className }
		onClick={ e => onClick({ id: e.currentTarget.id, isChecked: !checked, rowIndex }) }
		id={ id }
		key={ id }
		{ ...props }>
		<StyledCheckbox checked={ checked } { ...props }>
			<Icon viewBox='0 0 24 24'>
				<polyline points='20 6 9 17 4 12' />
			</Icon>
		</StyledCheckbox>
	</CheckboxContainer>
);

SelectBox.propTypes = {
	className: PropTypes.string,
	checked: PropTypes.bool,
	id: PropTypes.string,
	rowIndex: PropTypes.string,
	onClick: PropTypes.func
};
SelectBox.defaultProps = {
	className: undefined,
	checked: false,
	id: undefined,
	rowIndex: undefined,
	onClick: () => {}
};
export default SelectBox;
