import React from 'react';
import { Bar } from './styles';

export default ({ votes }) => {
  const results = votes.map(({ label, total }) => (
    <div className="result" key={label}>
      <div className="name">{label}</div>
      <Bar total={total} />
    </div>
  ));
  return <div className="resultsList">{results}</div>;
};
