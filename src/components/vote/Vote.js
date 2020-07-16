import React from 'react';
import VoteList from 'components/VoteList';

export default () => {
  const options = [
    { id: 0, label: 'op0' },
    { id: 1, label: 'op1' },
    { id: 2, label: 'op3' }
  ];
  return (
    <div>
      <div>Votación</div>
      <VoteList options={options} />
    </div>
  );
};
