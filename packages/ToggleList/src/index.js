import React, { useState, useEffect } from 'react';
import { StyledToggleListContainer } from './styled';
import ToggleComponent from './components/toggle';
import PropTypes from 'prop-types';

function ToggleList({ listItems, styleWidth, handleChange }) {
    const [selected, setSelected] = useState(listItems[0].name);

    useEffect(() => {
        handleChange(selected);
    }, [selected]);

    let onSelect = (newValue) => {
        setSelected(newValue);
    }
    return (
        <StyledToggleListContainer width={styleWidth}>
            {listItems.map(item => <ToggleComponent key={item.id} item={item} onSelect={onSelect} isSelected={item.name === selected} />)}
        </StyledToggleListContainer>

    );
}
ToggleList.propTypes = {
    listItems: PropTypes.array,
    styleWidth: PropTypes.number,
    handleChange: PropTypes.func
}

export default ToggleList;