import React from 'react';

export default ({ options }) => (
  <>
    {options.map(({ id, text }) => (
      <div key={id}>{text}</div>
    ))}
  </>
);
