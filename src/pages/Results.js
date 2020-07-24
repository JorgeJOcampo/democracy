import React, { useState, useEffect } from 'react';
import voteService from '../services/voteService';

const Vote = ({ user, votes }) => {
  const votesMap = votes.map((vote) => <div>Voto: {vote}</div>);
  return (
    <div>
      <div>User: {user}</div>
      <div>Votos: {votesMap}</div>
    </div>
  );
};

const VoteList = ({ votes }) => {
  const voteList = votes.map(({ user, votes }) => (
    <Vote user={user} votes={votes} key={user} />
  ));
  return <>{voteList}</>;
};

export default () => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    voteService.getVotes().then((result) => setVotes(result));
  }, []);

  return (
    <div>
      <div>Resultados votacion:</div>
      <VoteList votes={votes} />
    </div>
  );
};
