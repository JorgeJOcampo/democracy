import React, { useState, useEffect } from 'react';
import voteService from '../services/voteService';

const VoteList = ({ votes }) => {
  const voteList = votes.map(({ label, total }) => (
    <div>
      {label}: {total}
    </div>
  ));
  return <>{voteList}</>;
};

export default () => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    voteService.getVotes().then((result) => setVotes(result));
  }, []);
  const voteList = votes
    .reduce((res, { votes }) => {
      votes.forEach((label) => {
        const currentVote = res.find((vote) => vote.label === label);
        res = [
          ...res.slice(0, res.indexOf(currentVote)),
          {
            ...currentVote,
            total: currentVote.total ? currentVote.total + 1 : 1
          },
          ...res.slice(res.indexOf(currentVote) + 1, res.length)
        ];
      });
      return res;
    }, voteService.getOptions())
    .sort((a, b) => b.total - a.total);

  return (
    <div>
      <div>Resultados votacion:</div>
      <VoteList votes={voteList} />
    </div>
  );
};
