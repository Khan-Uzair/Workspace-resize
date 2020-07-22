import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResizeIcon from '../../icons/resize-icon';

export const IconWrapper = styled.div`
	position: absolute;
	top: calc(50% - 10px);
	left: -10px;
	cursor: pointer;
`;

export const ResizePlaceHolder = styled.div`
	top: 0px;
    right: -5px;
    width: 9px;
    position: absolute;
    z-index: 3;
	.resizer-bar{
		width: 2px;
		background-color: #007eb3;
		height: 100%;
		position:relative;
		visibility: hidden;
		margin: 0 auto;
	}
	&:hover{
		.resizer-bar{
			visibility: visible;
		}
	}
`;

const removePX = data => parseInt(data.split('px')[0], 10);
const ResizeHeadCell = ({
	children, className, colspan, resizerHeight, newColWidth, width, minWidth, maxWidth, ...otherProps
}) => {
	const colWidth = removePX(width);
	const colMinWidth = removePX(minWidth);
	const colMaxWidth = removePX(maxWidth);

	const resizerRef = useRef();
	const thRef = useRef();

	const [currentColWidth, setCurrentColWidth] = useState(colWidth);
	const [isIconFocused, setIsIconFocused] = useState(false);
	const [isReSizing, setIsReSizing] = useState(false);

	const getStyleVal = (elm, css) => (window.getComputedStyle(elm, null).getPropertyValue(css));
	const paddingDiff = (col) => {
		if (getStyleVal(col, 'box-sizing') === 'border-box') {
			return 0;
		}
		const padLeft = getStyleVal(col, 'padding-left');
		const padRight = getStyleVal(col, 'padding-right');
		return (parseInt(padLeft, 10) + parseInt(padRight, 10));
	};

	const handleMouseDown = (e) => {
		let curCol = thRef.current;
		let { pageX } = e;
		const padding = paddingDiff(curCol);
		let curColWidth = curCol.offsetWidth - padding;

		document.addEventListener('mousemove', (el) => {
			if (curCol) {
				setIsReSizing(true);
				const diffX = el.pageX - pageX;
				const newWidth = curColWidth + diffX;
				if (newWidth > colMinWidth && newWidth < colMaxWidth) {
					newColWidth(newWidth);
					setCurrentColWidth(newWidth);
				}
			}
		});

		document.addEventListener('mouseup', () => {
			curCol = undefined;
			pageX = undefined;
			curColWidth = undefined;
			setIsReSizing(false);
		});
	};

	useEffect(() => {
		resizerRef.current.addEventListener('mousedown', handleMouseDown);
	}, []);

	const getResizeIcon = () => {
		if (currentColWidth - 1 === colMinWidth) {
			return <ResizeIcon iconType='rightOnly' />;
		} if (currentColWidth + 1 === colMaxWidth) {
			return <ResizeIcon iconType='leftOnly' />;
		} if (isIconFocused) {
			return <ResizeIcon iconType='focused' />;
		}
		return <ResizeIcon />;
	};

	const newOtherProps = otherProps;
	newOtherProps.style = { ...newOtherProps.style, width: `${currentColWidth}px` };

	return (
		<th ref={ thRef } className={ className } colSpan={ colspan } { ...newOtherProps }>
			{children}
			<ResizePlaceHolder style={ { height: resizerHeight } }>
				<div className='resizer-bar' style={ { visibility: `${isReSizing ? 'visible' : ''}` } }>
					<IconWrapper
						ref={ resizerRef }
						onMouseDown={ () => setIsIconFocused(true) }
						onMouseUp={ () => setIsIconFocused(false) }>
						{getResizeIcon()}
					</IconWrapper>
				</div>
			</ResizePlaceHolder>
		</th>
	);
};
ResizeHeadCell.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	colspan: PropTypes.number,
	resizerHeight: PropTypes.string,
	newColWidth: PropTypes.func.isRequired,
	width: PropTypes.string.isRequired,
	minWidth: PropTypes.string.isRequired,
	maxWidth: PropTypes.string.isRequired
};
ResizeHeadCell.defaultProps = {
	children: undefined,
	className: undefined,
	colspan: undefined,
	resizerHeight: '100%'
};
export default ResizeHeadCell;

