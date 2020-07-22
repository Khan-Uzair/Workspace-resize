import styled from 'styled-components';
import { Column, Grid, Row } from '@beans/grid';
import Button from '@beans/button';
import Modal from '@beans/modal';

export const StickyTableFooterWrapper = styled.div`
	z-index: 2;
	display: flex;
	align-items: center;
	position: fixed;
	left: 0;
	bottom: 0px;
	height: 64px;
	width: 100%;
	background: #fff;
	.backToTopBtn {
		svg {
			transform: rotate(90deg);
		}
	}
`;
export const StickyTableFooterGrid = styled(Grid)`
	height: 100%;
	padding-left: 24px;
	padding-right: 24px;
`;
export const StickyTableFooterRow = styled(Row)`
	height: 100%;
	display: flex;
	justify-content:space-between;
	padding: 0;
`;
export const ActionBar = styled(Column)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	border-top: 1px solid #cccccc
	.add-products-btn {
		text-align: right;
		width: 100%
	}
	.selectRangeCancelBtnStyle{
		margin-right: 12px;
		width: 232px;
	}
`;

export const DraftActionBar = styled(Column)`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0;
	border-top: 1px solid #cccccc
`;

export const StyledCheckboxWrapper = styled.div`
	display: flex;
	padding-top: 4px;
	label {
		padding-right: 20px;
	}
`;

export const FlexWrapper = styled.div`
	display: flex;
	height: 40px;
	flex-wrap: wrap;
`;

export const TooltipButton = styled(Button)`
	min-width: 20px;
	span {
		width: 25px;
	}
`;

export const StyledModal = styled(Modal)`
	z-index: 12;
	#modal-container {
		width: 400px;
	}
	#summary-modal {
		max-width: 840px;
		width: 610px;
		z-index: 12;

		.beans-modal__scrollable-container > div {
			max-height: 68vh;
			overflow-y: auto;
		}
	}
`;

export const StyledDataTableCheckable = styled.div`
	.empty-row{
		td, button{
			font-weight: bold;
			color: #666666;
			font-family: "TESCO Modern",Arial,sans-serif;
		}
	}
	.range-classes{
		display: flex;
		justify-content: space-between;
		button{
			outline: none;
			border: 0px;
			font-size: 14px;
			border-right: 1px solid #ccc;
			background-color: #ffffff;
			&:last-child{
				border-right: 0px !important;
			}
		}
	}
	.ReactVirtualized__List {
		will-change: inherit !important;
		overflow: visible !important;
		outline: none;
		border-bottom: 1px solid #ccc;

		.ReactVirtualized__Grid__innerScrollContainer{
			overflow: visible !important;
			tr:last-child, tr:nth-last-child(2){
				[id^=row-action-menu-cell] ul{
					bottom: 36px;
					top: auto;
				}
			}
			tr{
				&:first-child{
					td{
						border-top: 0px;
					}
				}
				&:last-child{
					td{
						border-bottom: 1px solid #ccc;
					}
				}
				td{
					border-right: 1px solid #ccc;
					border-bottom: 0px;
					word-break: break-word;
				}
			}
		}
		
	}
`;
