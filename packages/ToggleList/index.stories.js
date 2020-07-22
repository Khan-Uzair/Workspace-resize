import React from 'react';
import ToggleList from './src';

export default { title: 'ToggleItems' };

export const Default = () => (
    <ToggleList listItems={[{ id: 1, name: "Cases" }, { id: 2, name: "Units" }]} styleWidth={100} handleChange={(id) => { console.log(id) }} />
);

export const Configurable = () => (
    <ToggleList listItems={[{ id: 1, name: "Cases" }, { id: 2, name: "Units" }, { id: 3, name: "Price" }, { id: 4, name: "Cost" }]} styleWidth={200} handleChange={(id) => { console.log(id) }} />
);

