import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Actionsmenu from './styled';

const ActionsmenuContainer = ({ menuItems, actionMenuChange, onMenuItemClickHandler }) => {
	const [open, setOpen] = useState(false);
	const actionMenuRef = useRef(null);

	const onChange = (e) => {
		setOpen(!open);
		actionMenuChange(e, actionMenuRef.current);
	};

	const onMenuItemClick = (item, event) => {
		event.preventDefault();
		setOpen(!open);
		onMenuItemClickHandler(item, event);
	};
	return (
		<Actionsmenu
			ref={ actionMenuRef }
			open={ open }
			menuItems={ menuItems }
			onChange={ onChange }
			styles={ { 'white-space': 'nowrap', width: '19px', height: '19px' } }
			onMenuItemClick={ onMenuItemClick }
		/>
	);
};

ActionsmenuContainer.propTypes = {
	actionMenuChange: PropTypes.func,
	menuItems: PropTypes.object.isRequired,
	onMenuItemClickHandler: PropTypes.func,
};

ActionsmenuContainer.defaultProps = {
	actionMenuChange: () => {},
	onMenuItemClickHandler: () => {}
};

export default ActionsmenuContainer;
