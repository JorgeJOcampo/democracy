import React, { useState } from 'react';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => {
  // const [isSelected, setIsSelected] = useState(false);
  // const toggleSelect = () => setIsSelected(!isSelected);
  return (
    <div className="form-check">
      <label htmlFor="a">
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
          className="form-check-input"
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
