import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@beans/icon';
import {
	StyledTableContainer, StyledTableWrapper, StyledDerangeAction, StyledCheckboxWrapper, StyledEllipsis
} from './styled';
import CellWrapper from '../cell-wrapper';
import HeadCell from '../head-cell';
import classNameGenerator from '../../helpers/classNameGenerator';
import * as elements from '../../constants';
import ResizeHeadCell from '../resize-head-cell';
import SelectBoxContainer from '../select-box';
import ActionsmenuContainer from '../action-menu';

export const getDeepCopy = obj => JSON.parse(JSON.stringify(obj));
export const TableHeader = React.memo(({
	head, subheader, handleNewColWidth, stickyHeader, stickySubheader, showCheckBox,
	resizeIndicatorHeight, handleSelectToggle, isSelectAllRows,
}) => {
	const checkBoxComponent = (
		<StyledCheckboxWrapper>
			<SelectBoxContainer
				selectToggle={ e => handleSelectToggle(elements.ALL_ROWS, e) }
				isChecked={ isSelectAllRows }
			/>
		</StyledCheckboxWrapper>
	);
	return (
		<thead>
			{head && (head.map((headerRow, headerRowIndex) => {
				const headCellComp = (
					headerRow.map((colName, colIndex) => {
						const headcell = (
							<>
								{colName.isReSizable ? (
									<ResizeHeadCell
										className={ `header-style ${colName.className || ''} ${classNameGenerator(elements.HEAD, { stickyHeader, stickySubheader })}` }
										style={ colName.width ? { ...colName.style, width: colName.width } : colName.style }
										colSpan={ colName.colSpan }
										key={ `head-cell-${colIndex}` }
										resizerHeight={ resizeIndicatorHeight }
										width={ colName.width }
										minWidth={ colName.minWidth }
										maxWidth={ colName.maxWidth }
										newColWidth={ width => handleNewColWidth(colName.value, width) }>
										{colName.value}
									</ResizeHeadCell>
								) : (
									<HeadCell
										className={ `header-style ${colName.className || ''} ${classNameGenerator(elements.HEAD, { stickyHeader, stickySubheader })}` }
										style={ colName.width ? { ...colName.style, width: colName.width } : colName.style }
										colSpan={ colName.colSpan }
										key={ `head-cell-${colIndex}` }>
										{colName.value}
									</HeadCell>
								)}
							</>
						);
						return headcell;
					})
				);
				return (
					<tr key={ `header-row-${headerRowIndex}` }>
						{headCellComp}
					</tr>
				);
			}))}
			{subheader && (
				<tr className={ `${showCheckBox ? 'with-checkbox-tr' : ''}` }>
					{subheader.map((colName, colIndex) => {
						let currentSpan;
						let toBeSpan;
						if (colName.span) {
							currentSpan = colName.span.current;
							toBeSpan = colName.span.toBe;
						}
						let borderToRemove;
						if (toBeSpan > 1) {
							borderToRemove = currentSpan === 1 ? 'no-right-border' : 'no-left-border';
						}
						const subHeadcell = (
							<HeadCell
								className={ `subheader ${colName.className || ''} ${classNameGenerator(elements.SUBHEAD, { stickyHeader, stickySubheader })} ${borderToRemove}` }
								style={ colName.style }
								colSpan={ colName.colSpan }
								key={ `head-cell-${colIndex}` }
								data-label={ colName.value }
								onClick={ colName.onClick }>
								{colIndex === 0 && showCheckBox && checkBoxComponent}
								{colName.value}
							</HeadCell>
						);

						return subHeadcell;
					})}
				</tr>
			)
			}
		</thead>

	);
});

TableHeader.propTypes = {
	head: PropTypes.array.isRequired,
	subheader: PropTypes.array.isRequired,
	handleNewColWidth: PropTypes.func.isRequired,
	stickyHeader: PropTypes.bool.isRequired,
	stickySubheader: PropTypes.bool.isRequired,
	showCheckBox: PropTypes.bool.isRequired,
	resizeIndicatorHeight: PropTypes.string.isRequired,
	handleSelectToggle: PropTypes.func.isRequired,
	isSelectAllRows: PropTypes.bool
};

TableHeader.defaultProps = {
	isSelectAllRows: false,
};

export const TableBody = React.memo(({
	body, showCheckBox, head, subheader, isMobileScreen, handleSelectToggle,
}) => (
	<tbody>
		{body.map((row, rowIndex) => {
			let responsiveHeaders;
			const values = row.rowData.map((colName, colIndex) => {
				const responsiveHedersVal = { ...responsiveHeaders };

				if (isMobileScreen && colName.parentHeader) {
					const subHeader = subheader.find(x => x.value === colName.parentHeader);

					const mainHeader = subHeader ? head[0].find(x => x.value === subHeader.parentHeader)
						: head[0].find(x => x.value === colName.parentHeader);
					if (mainHeader) {
						responsiveHedersVal.mainHeader = mainHeader.value;
						responsiveHedersVal.subHeader = subHeader ? subHeader.value : '';

						responsiveHedersVal.col = responsiveHedersVal.col ? responsiveHedersVal.col + 1 : 1;
						responsiveHeaders = { ...responsiveHedersVal };
					}
				}
				let currentSpan;
				let toBeSpan;
				if (colName.span) {
					currentSpan = colName.span.current;
					toBeSpan = colName.span.toBe;
				}
				const cellWrapper = (
					<CellWrapper
						className={ ` ${colName.className ? colName.className : ''}` }
						key={ `cell-${colIndex}` }
						style={ { ...colName.style } }
						data-label={ colName.value }
						onClick={ colName.onClick }
						responsiveHeaders={ responsiveHedersVal }
						colIndex={ colIndex }
						showCheckBox={ showCheckBox }
						spanColNumber={ currentSpan }
						spanColToBe={ toBeSpan }
						isMobileScreen={ isMobileScreen }>
						{colIndex === 0 && showCheckBox && (
							<>
								<StyledCheckboxWrapper>
									<SelectBoxContainer
										selectToggle={ e => handleSelectToggle(row, e) }
										isChecked={ row.checked }
									/>
								</StyledCheckboxWrapper>
							</>
						)}
						{typeof colName.value === 'string' ? <StyledEllipsis>{colName.value}</StyledEllipsis> : colName.value }
					</CellWrapper>
				);
				if (responsiveHeaders && (currentSpan === toBeSpan)) {
					responsiveHeaders.mainHeader = '';
					responsiveHeaders.subHeader = '';
					responsiveHeaders.col = 0;
				}
				return cellWrapper;
			});
			return (
				<tr key={ `body-row-${rowIndex}` }>
					{values}
				</tr>
			);
		})}
	</tbody>
));

TableBody.propTypes = {
	body: PropTypes.array.isRequired,
	showCheckBox: PropTypes.bool.isRequired,
	head: PropTypes.array.isRequired,
	subheader: PropTypes.array.isRequired,
	isMobileScreen: PropTypes.bool.isRequired,
	handleSelectToggle: PropTypes.func.isRequired,
};

export const TableFoot = React.memo(({
	footerData, stickyHeader, stickySubheader
}) => {
	const tableFootData = (footerData.map((colName, colIndex) => {
		let borderToRemove;
		if (colName.span && colName.span.toBe > 1) {
			borderToRemove = colName.span.current === 1 ? 'no-right-border' : 'no-left-border';
		}
		const footerCell = (
			<td
				className={ `footer ${classNameGenerator(elements.FOOTER, { stickyHeader, stickySubheader })} ${borderToRemove || ''}` }
				colSpan={ colName.colSpan }
				style={ colName.style }
				key={ `foot-cell-${colIndex}` }>
				{ colName.value }
			</td>
		);
		return footerCell;
	}));
	return (
		<tfoot>
			<tr>
				{tableFootData}
			</tr>
		</tfoot>

	);
});

TableFoot.propTypes = {
	footerData: PropTypes.array.isRequired,
	stickyHeader: PropTypes.bool.isRequired,
	stickySubheader: PropTypes.bool.isRequired
};

const Table = ({
	data, stickyHeader, stickySubheader, stickyColumn, showCheckBox, resizeIndicatorHeight,
	isSelectChipVisible, selectBoxChipConfiguration, updateCheckedValues, tableWrapperClassName,
	clusterIndex, onCheckHandler
}) => {
	const [tableWidth, setTableWidth] = useState('auto');
	const [colWidths, setColWidths] = useState({});
	const [isMobileScreen, setIsMobileScreen] = useState(false);
	const [isSelectAllRows, setSelectAllRows] = useState(false);
	const [selectedRows, setSelectedRows] = useState(0);

	const updateDimensions = () => {
		setIsMobileScreen(window.matchMedia('(max-width: 600px)').matches);
	};

	useEffect(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	useEffect(() => {
		setSelectAllRows(false);
		updateCheckedValues(elements.ALL_ROWS, false);
		setSelectedRows(0);
	}, [isSelectChipVisible, clusterIndex]);

	useEffect(() => {
		if (data.head) {
			const topHead = data.head[0];
			const isAnyColumnResizable = topHead.find(head => head.isReSizable);
			if (isAnyColumnResizable) {
				let calTableWidth = 0;
				const calColWidths = {};
				topHead.forEach((th) => {
					if (th.isReSizable) {
						const width = parseInt(th.width.split('px')[0], 10);
						calTableWidth += width;
						calColWidths[th.value] = width;
					} else {
						const width = th.width ? parseInt(th.width.split('px')[0], 10) : 180;
						calTableWidth += width;
						calColWidths[th.value] = width;
					}
				});
				setColWidths(calColWidths);
				setTableWidth(calTableWidth);
			}
		}
	}, [data.head]);

	const handleNewColWidth = (key, value) => {
		let colWidthsCopy = { colWidths };
		setColWidths((prevVal) => {
			colWidthsCopy = getDeepCopy(prevVal);
			colWidthsCopy[key] = value;
			return colWidthsCopy;
		});
		const newTableWidth = Object.values(colWidthsCopy).reduce((d, colWidth) => d + colWidth, 0);
		setTableWidth(newTableWidth);
	};

	const allRowsChecked = (isChecked) => {
		for (let i = 0; i < data.body.length; i += 1) {
			// eslint-disable-next-line no-param-reassign
			data.body[i].checked = isChecked;
		}
	};

	const selectToggleHandler = (row, isChecked) => {
		if (row === elements.ALL_ROWS) {
			setSelectAllRows(isChecked);
			if (isChecked) {
				allRowsChecked(true);
				setSelectedRows(data.body.length);
			}
			if (!isChecked) {
				setSelectedRows(0);
				allRowsChecked(false);
			}
		} else {
			setSelectAllRows(false);
			if (isChecked) {
				// eslint-disable-next-line no-param-reassign
				row.checked = true;
				const selectedRowsVal = selectedRows + 1;
				setSelectedRows(selectedRowsVal);
				if (selectedRowsVal === data.body.length) {
					setSelectAllRows(true);
				}
			}
			if (!isChecked) {
				// eslint-disable-next-line no-param-reassign
				row.checked = false;
				const selectedRowsVal = selectedRows - 1;
				setSelectedRows(selectedRowsVal);
			}
		}
		updateCheckedValues(row, isChecked);
		onCheckHandler({ row, isChecked, data });
	};

	const removeSelectedRows = () => {
		setSelectAllRows(false);
		setSelectedRows(0);
		allRowsChecked(false);
		updateCheckedValues(elements.ALL_ROWS, false);
	};

	const selectedRowsEvent = (menuItem) => {
		const checkedRows = data.body.filter(row => row.checked);
		selectBoxChipConfiguration.selectedCheckboxAction({ checkedRows, menuItem });
		setSelectAllRows(false);
		setSelectedRows(0);
		allRowsChecked(false);
		updateCheckedValues(elements.ALL_ROWS, false);
	};

	return (
		<>
			<StyledTableContainer>
				<StyledTableWrapper className={ `${tableWrapperClassName || ''}` }>
					<table className={ `responsive-table ${classNameGenerator(elements.TABLE, { stickyHeader, stickySubheader, stickyColumn })}` } style={ isMobileScreen ? {} : { width: `${tableWidth}px` } }>
						<TableHeader
							head={ data.head }
							subheader={ data.subheader }
							handleNewColWidth={ handleNewColWidth }
							stickyHeader={ stickyHeader }
							stickySubheader={ stickySubheader }
							showCheckBox={ showCheckBox }
							resizeIndicatorHeight={ resizeIndicatorHeight }
							handleSelectToggle={ selectToggleHandler }
							isSelectAllRows={ isSelectAllRows }
						/>
						<TableBody
							body={ data.body }
							head={ data.head }
							subheader={ data.subheader }
							showCheckBox={ showCheckBox }
							isMobileScreen={ isMobileScreen }
							handleSelectToggle={ selectToggleHandler }
						/>
						{data.footerData && (
							<TableFoot footerData={ data.footerData } />
						)}
					</table>
				</StyledTableWrapper>
			</StyledTableContainer>
			{((isSelectAllRows || selectedRows > 0) && isSelectChipVisible) && (
				<StyledDerangeAction>
					<div className='selected-checkbox-chip'>
						<span className='label'>{`${selectedRows} ${selectBoxChipConfiguration ? selectBoxChipConfiguration.selectedCheckboxLabel : ''}`}</span>
						<span className='remove-selected'><Icon graphic='close' onClick={ removeSelectedRows } stroke={ `${elements.white}` } /></span>
						<div className='action-btn'>
							<ActionsmenuContainer
								menuItems={ selectBoxChipConfiguration ? selectBoxChipConfiguration.chipMenuItems : [] }
								onMenuItemClickHandler={ selectedRowsEvent }
							/>
						</div>
					</div>
				</StyledDerangeAction>
			)}
		</>
	);
};

Table.propTypes = {
	data: PropTypes.object.isRequired,
	stickyHeader: PropTypes.bool.isRequired,
	stickySubheader: PropTypes.bool.isRequired,
	stickyColumn: PropTypes.bool.isRequired,
	showCheckBox: PropTypes.bool,
	resizeIndicatorHeight: PropTypes.string,
	isSelectChipVisible: PropTypes.bool,
	selectBoxChipConfiguration: PropTypes.object.isRequired,
	updateCheckedValues: PropTypes.func,
	tableWrapperClassName: PropTypes.string,
	clusterIndex: PropTypes.number,
	onCheckHandler: PropTypes.func
};

Table.defaultProps = {
	showCheckBox: false,
	resizeIndicatorHeight: '100%',
	isSelectChipVisible: false,
	tableWrapperClassName: '',
	clusterIndex: 0,
	updateCheckedValues: () => {},
	onCheckHandler: () => {}
};

export default Table;
