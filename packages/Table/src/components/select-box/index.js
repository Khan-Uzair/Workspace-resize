import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SelectBox from './SelectBox';

const SelectBoxContainer = ({ selectToggle, isChecked }) => {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setChecked(isChecked);
	}, [isChecked]);

	const handleSelectBoxClick = () => {
		setChecked(!checked);
		selectToggle(!checked);
	};

	const randomColor = '007eb3';

	return (
		<SelectBox
			random={ randomColor }
			checked={ checked }
			onClick={ () => handleSelectBoxClick() }
			bgColor={ `#${randomColor}` }
		/>
	);
};

SelectBoxContainer.propTypes = {
	selectToggle: PropTypes.func.isRequired,
	isChecked: PropTypes.bool
};

SelectBoxContainer.defaultProps = {
	isChecked: false
};

export default SelectBoxContainer;

