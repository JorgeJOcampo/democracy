import React from 'react';
import { useRecoilValue } from 'recoil';
import VoteList from 'components/VoteList';
import { votesState } from '../../state/voteState';
import { database } from '../../firebase';
import { useSession } from '../../hooks/userHooks';

export default () => {
  const [user, { signOut }] = useSession();
  const votes = useRecoilValue(votesState);
  const options = [
    { id: 0, label: 'op0' },
    { id: 1, label: 'op1' },
    { id: 2, label: 'op2' },
    { id: 3, label: 'op3' },
    { id: 4, label: 'op4' },
    { id: 5, label: 'op5' }
  ];

  const submit = () =>
    database.collection('votes').add({ user: user.email, votes });

  return (
    <div>
      <div>user:{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Logout
      </button>
      <div>Votación</div>
      <VoteList options={options} />
      <button type="button" onClick={submit}>
        Submit
      </button>
    </div>
  );
};
