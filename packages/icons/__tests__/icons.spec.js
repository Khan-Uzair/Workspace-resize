import { render } from '@testing-library/react';
import * as icons from '../src';


describe('icons', () => {
    test('Resizer Icon', () => {
        const ResizerIcon = icons.ResizeIcon;
        const { asFragment } = render(<ResizerIcon />);
        expect(asFragment()).toMatchSnapshot();
    })
    test('Add icon', () => {

    });
    test('Analysis icon', () => {

    })
    test('Settings icon', () => {
        
    })
    test('Close icon', () => {
        
    })
    test('Star icon', () => {
        
    })


});