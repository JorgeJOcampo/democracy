import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';

const MAX_SELECTED = 3;

export default ({ options }) => {
  const [mapOptions, setMapOptions] = useState(
    options.map(({ id, label }) => ({ id, label, isSelected: false }))
  );
  const selectedQuantity = mapOptions.filter(({ isSelected }) => isSelected)
    .length;
  const toggleSelect = (label) => {
    const currentCheckbox = mapOptions.find(
      (checkbox) => checkbox.label === label
    );
    setMapOptions([
      ...mapOptions.slice(0, mapOptions.indexOf(currentCheckbox)),
      { ...currentCheckbox, isSelected: !currentCheckbox.isSelected },
      ...mapOptions.slice(
        mapOptions.indexOf(currentCheckbox) + 1,
        mapOptions.length
      )
    ]);
  };
  const list = mapOptions.map(({ id, label, isSelected }) => (
    <Checkbox
      key={id}
      label={label}
      isSelected={isSelected}
      disabled={!isSelected && selectedQuantity >= MAX_SELECTED}
      onCheckboxChange={() => toggleSelect(label)}
    />
  ));
  return (
    <div>
      <div>Selected: {selectedQuantity}</div>
      {list}
    </div>
  );
};
