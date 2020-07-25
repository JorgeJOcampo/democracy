import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import VoteList from 'components/VoteList';
import { votesState } from '../../state/voteState';
import { database } from '../../firebase';
import { useSession } from '../../hooks/userHooks';
import voteService from '../../services/voteService';

export default () => {
  const [user, { signOut }] = useSession();
  const [voted, setVoted] = useState(false);
  const votes = useRecoilValue(votesState);

  const submit = () =>
    database.collection('votes').add({ user: user.email, votes }) &&
    setVoted(true);

  return voted ? (
    <div>Ya votaste!</div>
  ) : (
    <div>
      <div>user:{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Logout
      </button>
      <div>Votación</div>
      <VoteList options={voteService.getOptions()} />
      <button type="button" onClick={submit} disabled={voted}>
        Submit
      </button>
    </div>
  );
};
