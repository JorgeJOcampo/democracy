import React, { useState, useEffect } from 'react';
import voteService from 'services/voteService';
import PollList from './PollList';

export default () => {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    voteService.getPolls().then((results) => setPolls(results));
  });
  return (
    <div>
      <div>Tus Votaciones</div>
      <PollList polls={polls} />
    </div>
  );
};
