import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Option from './Option';
import { pollOptionsState } from './state';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const values = useRecoilValue(pollOptionsState);
  const setValues = useSetRecoilState(pollOptionsState);

  const onChange = ({ target: { value } }) => setInputValue(value);

  const addOption = () => {
    setValues((oldValues) => [
      ...oldValues,
      {
        id: oldValues.length,
        text: inputValue
      }
    ]);
    setInputValue('');
  };

  const onEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      addOption();
    }
  };

  return (
    <>
      <div>Opciones</div>
      {values.map((option, index) => (
        <Option key={option.id} option={option} index={index} />
      ))}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          onKeyPress={onEnterKeyPress}
          // onKeyPress={(e) => onKeyPress(e, inputValue)}
        />
      </div>
      <button type="button" onClick={addOption} disabled={false}>
        Nueva opción
      </button>
    </>
  );
};
