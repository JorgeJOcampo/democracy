import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import VoteList from 'components/VoteList';
import { useParams } from 'react-router-dom';
import { votesState } from '../../state/voteState';
import { database } from '../../firebase';
import { useSession } from '../../hooks/userHooks';
import voteService from '../../services/voteService';

export default () => {
  const { id } = useParams();
  const [user, { signOut }] = useSession();
  const [voted, setVoted] = useState(false);
  const [pollName, setPollName] = useState('Votación');
  const [options, setOptions] = useState([]);
  const votes = useRecoilValue(votesState);

  const submit = () =>
    database.collection('votes').add({ user: user.email, votes }) &&
    setVoted(true);

  useEffect(() => {
    voteService.getPoll(id).then((poll) => {
      setOptions(voteService.formatOptions(poll.options));
      setPollName(poll.name);
    });
  }, []);

  if (!options.length) {
    return <div>Loading...</div>;
  }

  return voted ? (
    <div>Ya votaste!</div>
  ) : (
    <div>
      <div>user:{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Logout
      </button>
      <div>{pollName}</div>
      <VoteList options={options} />
      <button type="button" onClick={submit} disabled={voted}>
        Submit
      </button>
    </div>
  );
};
