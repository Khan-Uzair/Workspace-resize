import React from 'react';
import PropTypes from 'prop-types';

const HeadCell = ({
	children, className, colspan, ...otherProps
}) => (
	<th className={ className } colSpan={ colspan } { ...otherProps }>
		{children}
	</th>
);
HeadCell.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	colspan: PropTypes.number
};
HeadCell.defaultProps = {
	children: undefined,
	className: undefined,
	colspan: undefined
};
export default HeadCell;

