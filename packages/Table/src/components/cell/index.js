import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({
	children, className, colspan, ...otherProps
}) => (
	<td className={ className } colSpan={ colspan } { ...otherProps }>
		{children}
	</td>
);
Cell.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	colspan: PropTypes.number
};
Cell.defaultProps = {
	children: undefined,
	className: undefined,
	colspan: undefined
};
export default Cell;
