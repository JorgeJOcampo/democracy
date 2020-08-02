import React, { useState, useEffect } from 'react';
import voteService from 'services/voteService';
import PollList from './PollList';
import { PollsContainer } from './styled';

export default () => {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    voteService.getPolls().then((results) => setPolls(results));
  });
  return (
    <PollsContainer>
      <div className="title">Tus Votaciones</div>
      <PollList polls={polls} />
    </PollsContainer>
  );
};
