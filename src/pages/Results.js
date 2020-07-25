import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  const [poll, setPoll] = useState();
  const [votes, setVotes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    voteService.getPoll(id).then((result) => setPoll(result));
    voteService.onChange(id, (results) => setVotes(results));
  }, []);

  if (!poll) {
    return <div>Loading...</div>;
  }

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
    }, voteService.formatOptions(poll.options))
    .sort((a, b) => b.total - a.total);

  return (
    <div>
      <div>Resultados votacion:</div>
      <VoteList votes={voteList} />
    </div>
  );
};
