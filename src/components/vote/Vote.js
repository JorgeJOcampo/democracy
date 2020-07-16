import React from 'react';
import VoteList from 'components/VoteList';

export default () => {
  const options = [
    { id: 0, label: 'op0' },
    { id: 1, label: 'op1' },
    { id: 2, label: 'op3' },
    { id: 3, label: 'op3' },
    { id: 4, label: 'op4' },
    { id: 5, label: 'op5' }
  ];
  return (
    <div>
      <div>Votación</div>
      <VoteList options={options} />
    </div>
  );
};
