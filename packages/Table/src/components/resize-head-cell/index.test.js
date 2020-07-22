import React from 'react';
import { shallow } from 'enzyme';
import ResizeHeadCell, { ResizePlaceHolder, IconWrapper } from '.';

describe('<ResizeHeadCell />', () => {
	const defaultProps = {
		children: null,
		className: '',
		colspan: 0,
		resizerHeight: '123px',
		newColWidth: jest.fn(),
		width: '100px',
		minWidth: '150px',
		maxWidth: '150px'
	};
	const getWrapper = (props = defaultProps) => shallow(<ResizeHeadCell { ...props } />);

	it('should render without crashing', () => {
		const wrapper = getWrapper();
		expect(wrapper).toHaveLength(1);
	});

	it('Should have th, <ResizePlaceHolder/>, resizer-bar, <IconWrapper /> and svg', () => {
		const wrapper = getWrapper();
		expect(wrapper.find('th')).toHaveLength(1);
		expect(wrapper.find(ResizePlaceHolder)).toHaveLength(1);
		expect(wrapper.find('div.resizer-bar')).toHaveLength(1);
		expect(wrapper.find(IconWrapper)).toHaveLength(1);
		expect(wrapper.find(IconWrapper).text()).toEqual('<ResizeIcon />');
	});
});
