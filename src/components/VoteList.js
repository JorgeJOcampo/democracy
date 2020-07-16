import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';

export default ({ options }) => {
  const [mapOptions, setMapOptions] = useState(
    options.map(({ id, label }) => ({ id, label, isSelected: false }))
  );
  const selectedQuantity = mapOptions.filter(({ isSelected }) => isSelected)
    .length;
  const toggleSelect = (op) => {
    const este = mapOptions.find(({ label }) => label === op);
    setMapOptions([
      ...mapOptions.slice(0, mapOptions.indexOf(este)),
      { ...este, isSelected: !este.isSelected },
      ...mapOptions.slice(mapOptions.indexOf(este) + 1, mapOptions.length)
    ]);
  };
  const list = mapOptions.map(({ id, label, isSelected }) => (
    <Checkbox
      label={label}
      isSelected={isSelected}
      onCheckboxChange={() => toggleSelect(label)}
      key={id}
    />
  ));
  return (
    <div>
      <div>Selected: {selectedQuantity}</div>
      {list}
    </div>
  );
};
