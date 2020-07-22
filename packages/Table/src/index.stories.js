import React from 'react';
import styled from 'styled-components';
import Table from "./components/table";
import ActionsmenuContainer from './components/action-menu';
import { ThemeProvider, defaultTheme } from "@beans/theme";
import customThemes from "../../../.storybook/themes";

export default { title: "Table" };

export const Simple = () => <ThemeProvider theme={{ ...defaultTheme, ...customThemes }}>
	<Table 
		data={{
			head: [
					[
						{value:'Column 1'},
						{value:'Column 2'},
						{value:'Column 3'},
						{value:'Column 4'},
						{value:'Column 5'}
					]
				],
			body: [
				{rowData: [{value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}]},
				{rowData: [{value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}]},
				{rowData: [{value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}]},
				{rowData: [{value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}]},
				{rowData: [{value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}]}
			]
		}}
	/>
</ThemeProvider>

export const WithSubheader = () => <ThemeProvider theme={{ ...defaultTheme, ...customThemes }}>
	<Table 
		data={{
			head: [
					[
						{value:'Column 1', colSpan:1},
						{value:'Column 2', colSpan:2},
						{value:'Column 3', colSpan:2},
						{value:'Column 4', colSpan:1},
					]
				],
			subheader: [
				{value: ''},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 2, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 2, toBe: 2 }},
				{value: ''}],
			body: [
				{rowData: [{value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}]},
				{rowData: [{value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}]},
				{rowData: [{value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}]},
				{rowData: [{value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}]},
				{rowData: [{value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}]},
			]
		}}
	/>
</ThemeProvider>


export const WithResizableColumn = () => <ThemeProvider theme={{ ...defaultTheme, ...customThemes }}>
	<Table 
		data={{
			head: [
					[
						{value:'Column 1', colSpan:1, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 2', colSpan:2, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 3', colSpan:2, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 4', colSpan:1, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
					]
				],
			subheader: [
				{value: ''},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 2, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 2, toBe: 2 }},
				{value: ''}],
			body: [
				{rowData: [{value:'Date row 1 Date row 1 Date row 1 Date row 1 Date row 1 Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}]},
				{rowData: [{value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}]},
				{rowData: [{value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}]},
				{rowData: [{value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}]},
				{rowData: [{value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}]},
			]
		}}
		resizeIndicatorHeight="80px"
	/>
</ThemeProvider>


const chipMenuItems = [{
	href: '/',
	id: 'action 1',
	text: 'Action 1',
  },
  {
	href: '/',
	id: 'action 2',
	text: 'Action 2'
}];
export const WithCheckbox = () => <ThemeProvider theme={{ ...defaultTheme, ...customThemes }}>
	<Table 
		data={{
			head: [
					[
						{value:'Column 1', colSpan:1, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 2', colSpan:2, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 3', colSpan:2, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 4', colSpan:1, isReSizable: true, width: '150px', minWidth: '100px', maxWidth: '300px'},
					]
				],
			subheader: [
				{value: '',},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 2, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 2, toBe: 2 }},
				{value: ''}],
			body: [
				{rowData: [{value:'Date row 1 Date row 1 Date row 1'}, {value:'Date row 1 Date row 1 Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}]},
				{rowData: [{value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}]},
				{rowData: [{value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}]},
				{rowData: [{value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}]},
				{rowData: [{value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}]},
			]
		}}
		resizeIndicatorHeight="86px"
		showCheckBox
		isSelectChipVisible
		selectBoxChipConfiguration={ {
			chipMenuItems,
			selectedCheckboxLabel: 'items selected'
		} } 
	/>
</ThemeProvider>

const ProductDescriptionContainer = styled.div`
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #00539f;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	display: block;
`;

function getDescription(product) {
	const menuItems = [{
		href: '/',
		id: 'acction 1',
		text: 'Action 1',
	},
	{
		href: '/',
		id: 'action 2',
		text: 'Action 2'
	}];
	return (
			<>
				<span style={ { width: '65px', float: 'left' } }>{product.tpnb}</span>
				<ProductDescriptionContainer style={ { flex: '1' } }>{product.productDescription}</ProductDescriptionContainer>
			</>
	);
}

export const WithStickyHeaderSubheaderFirstColumn = () => <ThemeProvider theme={{ ...defaultTheme, ...customThemes }}>
	<Table 
		data={{
			head: [
					[
						{value:'Column 1', colSpan:1, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 2', colSpan:2, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px', style:{zIndex: '3'}},
						{value:'Column 3', colSpan:2},
						{value:'Column 4', colSpan:1},
					]
				],
			subheader: [
				{value: '',},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 2, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 2, toBe: 2 }},
				{value: ''}],
			body: [
				{rowData: [{value: getDescription({tpnb: '00000000', productDescription: 'longer product description'})}, {value:'Date row 1 Date row 1 Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}]},
				{rowData: [{value: getDescription({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}]},
				{rowData: [{value: getDescription({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}]},
				{rowData: [{value: getDescription({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}]},
				{rowData: [{value: getDescription({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}]},
			]
		}}
		resizeIndicatorHeight="86px"
		showCheckBox
		isSelectChipVisible
		selectBoxChipConfiguration={ {
			chipMenuItems,
			selectedCheckboxLabel: 'items selected'
		} } 
		stickyHeader
		stickySubheader
		stickyColumn
	/>
</ThemeProvider>


const handleActionMenuChange = (e, el) => {
	const tdNode = el._buttonRef.current.closest('td');
	if (e.action === 'close') {
		tdNode.style.zIndex = '1';
	} else if (e.action === 'open') {
		tdNode.style.zIndex = '2';
	}
};

function getDescriptionAndActionsMenu(product) {
	const menuItems = [{
		href: '/',
		id: 'acction 1',
		text: 'Action 1',
	},
	{
		href: '/',
		id: 'action 2',
		text: 'Action 2'
	}];
	return (
		
			<>
				<span style={ { width: '65px', float: 'left' } }>{product.tpnb}</span>
				<div style={{display: 'flex'}}>
					<ProductDescriptionContainer style={ { flex: '1' } }>{product.productDescription}</ProductDescriptionContainer>
					<ActionsmenuContainer menuItems={ menuItems } actionMenuChange={ handleActionMenuChange } />
				</div>
			</>
		
	);
}

export const Advance = () => <ThemeProvider theme={{ ...defaultTheme, ...customThemes }}>
	<Table 
		data={{
			head: [
					[
						{value:'Column 1', colSpan:1, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px'},
						{value:'Column 2', colSpan:2, isReSizable: true, width: '250px', minWidth: '200px', maxWidth: '500px', style:{zIndex: '3'}},
						{value:'Column 3', colSpan:2},
						{value:'Column 4', colSpan:1},
					]
				],
			subheader: [
				{value: '',},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 1', parentHeader: 'Column 2', span: { current: 2, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 1, toBe: 2 }},
				{value: 'Subhead 2', parentHeader: 'Column 3', span: { current: 2, toBe: 2 }},
				{value: ''}],
			body: [
				{rowData: [{value: getDescriptionAndActionsMenu({tpnb: '00000000', productDescription: 'longer product description'})}, {value:'Date row 1 Date row 1 Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}, {value:'Date row 1'}]},
				{rowData: [{value: getDescriptionAndActionsMenu({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}, {value:'Date row 2'}]},
				{rowData: [{value: getDescriptionAndActionsMenu({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}, {value:'Date row 3'}]},
				{rowData: [{value: getDescriptionAndActionsMenu({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}, {value:'Date row 4'}]},
				{rowData: [{value: getDescriptionAndActionsMenu({tpnb: '00000000', productDescription: 'product description'})}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}, {value:'Date row 5'}]},
			]
		}}
		resizeIndicatorHeight="86px"
		showCheckBox
		isSelectChipVisible
		selectBoxChipConfiguration={ {
			chipMenuItems,
			selectedCheckboxLabel: 'items selected'
		} } 
		stickyHeader
		stickySubheader
		stickyColumn
	/>
</ThemeProvider>