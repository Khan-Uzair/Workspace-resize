import React from 'react';
import { shallow } from 'enzyme';

import Cell from '../index';
import ActionsmenuContainer from '../../../../ActionsMenuContainer';

describe('Head-cell', () => {
	it('should render no actions menu', () => {
		const props = {
			colIndex: 0,
			showActionsMenu: false,
		};

		const wrapper = shallow(<Cell { ...props } />);
		expect(wrapper.find(ActionsmenuContainer).length).toBe(0);
	});
});
