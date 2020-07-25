import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import VoteList from 'components/VoteList';
import { useParams } from 'react-router-dom';
import { votesState } from '../../state/voteState';
import { useSession } from '../../hooks/userHooks';
import voteService from '../../services/voteService';

export default () => {
  const { id } = useParams();
  const [user, { signOut }] = useSession();
  const [voted, setVoted] = useState(false);
  const [pollName, setPollName] = useState('Votación');
  const [maxSelectable, setMaxSelectable] = useState();
  const [options, setOptions] = useState([]);
  const votes = useRecoilValue(votesState);

  const submit = () =>
    voteService.createVote({
      user: { id: user.uid, email: user.email, name: user.displayName },
      poll_id: id,
      votes
    }) && setVoted(true);

  useEffect(() => {
    voteService.getPoll(id).then((poll) => {
      setOptions(voteService.formatOptions(poll.options));
      setPollName(poll.name);
      setMaxSelectable(poll.max_selectable);
    });
  }, [id]);

  if (!options.length) {
    return <div>Loading...</div>;
  }

  if (voted) {
    return <div>Ya votaste!</div>;
  }

  return (
    <div>
      <div>user:{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Logout
      </button>
      <div>{pollName}</div>
      <VoteList options={options} maxSelectable={maxSelectable} />
      <button type="button" onClick={submit} disabled={voted}>
        Submit
      </button>
    </div>
  );
};
