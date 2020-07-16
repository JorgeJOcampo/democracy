import React from 'react';

const Checkbox = ({ label, isSelected, onCheckboxChange, disabled }) => {
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
          disabled={disabled}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
