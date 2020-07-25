import React from 'react';
import Checkbox from 'components/Checkbox';
import { useOptions } from './hooks';

export default ({ options, maxSelectable }) => {
  const [{ mapOptions, selectedQuantity }, toggleSelect] = useOptions(options);

  const list = mapOptions.map(({ id, label, isSelected }) => (
    <Checkbox
      key={id}
      label={label}
      isSelected={isSelected}
      disabled={!isSelected && selectedQuantity >= maxSelectable}
      onCheckboxChange={() => toggleSelect(id, label)}
    />
  ));

  return (
    <div>
      <div>Selected: {selectedQuantity}</div>
      {list}
    </div>
  );
};
