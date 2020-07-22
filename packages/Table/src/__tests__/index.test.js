import React from 'react';
import { shallow } from 'enzyme';
import { TableHeader, TableBody } from '../index';
import HeadCell from '../components/head-cell';

describe('Table', () => {
	global.window.matchMedia = jest.fn(() => ({
		matches: false,
		addListener: jest.fn(),
		removeListener: jest.fn()
	}));

	it('should render table header cells', () => {
		const props = {
			head: [
				[
					{ style: {}, colSpan: 1, value: 'Head 1' },
					{ style: {}, colSpan: 1, value: 'Head 2' }
				]
			],
			subheader: [
				{ style: {}, value: 'Subhead 1', span: {} },
				{ style: {}, value: 'Subhead 2', span: {} }
			],
			handleNewColWidth: jest.fn(),
			stickyHeader: false,
			stickySubheader: false,
			showCheckBox: false,
		};
		const wrapper = shallow(<TableHeader { ...props } />);
		expect(wrapper.find('tr').length).toBe(2);
		expect(wrapper.find(HeadCell).length).toBe(4);
	});

	it('should render table body rows', () => {
		const props = {
			body: [
				{
					rowData: [
						{ style: {}, value: 'Data 1' },
						{ style: {}, value: 'Data 2' }
					],
					checked: false
				},
				{
					rowData: [
						{ style: {}, value: 'Data 1' },
						{ style: {}, value: 'Data 2' }
					],
					checked: false
				}
			],
			showCheckBox: false,
			head: [
				[
					{ style: {}, colSpan: 1, value: 'Head 1' },
					{ style: {}, colSpan: 1, value: 'Head 2' }
				]
			],
			subheader: [
				{ style: {}, value: 'Subhead 1', span: {} },
				{ style: {}, value: 'Subhead 2', span: {} }
			],
			isMobileScreen: false,
			showActionsMenu: false,
		};
		const wrapper = shallow(<TableBody { ...props } />);
		expect(wrapper.find('tr').length).toBe(2);
	});
});
