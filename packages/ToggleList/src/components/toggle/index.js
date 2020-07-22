import React from 'react';
import { StyledToggleComponent } from './styled';
import PropTypes from 'prop-types';

function ToggleComponent({ item, onSelect, isSelected }) {
    return (
        <StyledToggleComponent id={item.name} onClick={() => onSelect(item.name)} isSelected={isSelected}>
            <label>
                {item.name}
            </label>
        </StyledToggleComponent>
    )
}

ToggleComponent.propTypes = {
    items: PropTypes.Object,
    onSelect: PropTypes.func,
    isSelected: PropTypes.bool
}

export default ToggleComponent;