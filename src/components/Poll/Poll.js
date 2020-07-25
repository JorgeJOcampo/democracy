import React from 'react';
import VoteList from 'components/VoteList';
import { usePoll } from './hooks';

export default () => {
  const [
    { options, voted, pollName, maxSelectable, loading },
    submit
  ] = usePoll();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (voted) {
    return <div>Ya votaste!</div>;
  }

  return (
    <div>
      <div>{pollName}</div>
      <VoteList options={options} maxSelectable={maxSelectable} />
      <button type="button" onClick={submit} disabled={voted}>
        Submit
      </button>
    </div>
  );
};
