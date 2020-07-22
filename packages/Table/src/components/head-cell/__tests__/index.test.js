import React from 'react';
import { shallow } from 'enzyme';

import HeadCell from '../index';

describe('Head-cell', () => {
	it('should render head cell', () => {
		const wrapper = shallow(<HeadCell />);
		expect(wrapper.find('th').length).toBe(1);
	});
});
