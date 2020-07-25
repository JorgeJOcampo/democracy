import React from 'react';

export default ({ votes }) => {
  const results = votes.map(({ label, total }) => (
    <div key={label}>
      {label}: {total}
    </div>
  ));
  return <>{results}</>;
};
