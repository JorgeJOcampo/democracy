import React from 'react';

export default ({ votes }) => {
  console.log('votes', votes);
  const results = votes.map(({ label, total }) => (
    <div>
      {label}: {total}
    </div>
  ));
  return <>{results}</>;
};
