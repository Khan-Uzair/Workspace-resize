import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../cell';

const CellWrapper = (props) => {
	const {
		children, className, colspan, colIndex, responsiveHeaders, showCheckBox,
		isCheckbox, spanColNumber, spanColToBe, isMobileScreen, ...otherProps
	} = props;
	let borderToRemove;
	if (spanColToBe > 1) borderToRemove = spanColNumber === 1 ? 'no-right-border' : 'no-left-border';

	const responsiveCardHeader = (responsiveHeaders && responsiveHeaders.col === 1) && (
		<div
			className={ `resp-hdr main-col-hdr ${!responsiveHeaders.subHeader && 'main-sub-hdr'} ${(showCheckBox && colIndex > 0) ? 'with-checkbox' : ''}` }>
			{responsiveHeaders.mainHeader}
		</div>
	);

	const responsiveCardSubHeader = (responsiveHeaders && responsiveHeaders.subHeader) && (
		<div
			className={ `resp-hdr sub-col-hdr ${(showCheckBox && colIndex > 0) ? 'with-checkbox' : ''}` }>
			{ responsiveHeaders.subHeader && `${responsiveHeaders.subHeader}:`}
		</div>
	);

	const classes = `${className} ${borderToRemove || ''} ${(showCheckBox && isCheckbox) ? 'checkbox-td' : ''} ${colIndex === 0 ? 'first-data-col' : ''} ${(showCheckBox && colIndex === 0) ? 'with-checkbox-first-col' : ''}`;

	return (
		<Cell
			className={ classes }
			colspan={ colspan }
			{ ...otherProps }>
			{!isMobileScreen ? (
				<div className='col-data-full'>
					{children}
				</div>
			) : (
				<div className='col-data-resp'>
					{responsiveCardHeader && responsiveCardHeader}
					{responsiveCardSubHeader && responsiveCardSubHeader}
					<div className={ `range-val ${colIndex > 0 ? 'with-data' : ''} ${responsiveHeaders && responsiveHeaders.subHeader && 'sub-col-hdr-val'}` }>
						{ children }
					</div>
				</div>
			)}
		</Cell>
	);
};

CellWrapper.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	colspan: PropTypes.number,
	responsiveHeaders: PropTypes.object,
	colIndex: PropTypes.number,
	showCheckBox: PropTypes.bool,
	isCheckbox: PropTypes.bool,
	spanColNumber: PropTypes.number,
	spanColToBe: PropTypes.number,
	isMobileScreen: PropTypes.bool
};
CellWrapper.defaultProps = {
	children: undefined,
	className: undefined,
	colspan: undefined,
	responsiveHeaders: undefined,
	colIndex: undefined,
	showCheckBox: false,
	isCheckbox: false,
	spanColNumber: 0,
	spanColToBe: 0,
	isMobileScreen: false
};
export default CellWrapper;

