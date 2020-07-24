import React from 'react';
import VoteList from 'components/VoteList';
import { database } from '../../firebase';
import { useSession } from '../../hooks/userHooks';

export default () => {
  const [user, { signOut }] = useSession();
  const options = [
    { id: 0, label: 'op0' },
    { id: 1, label: 'op1' },
    { id: 2, label: 'op2' },
    { id: 3, label: 'op3' },
    { id: 4, label: 'op4' },
    { id: 5, label: 'op5' }
  ];
  const fakeVote = {
    user: user.email,
    votes: ['op1', 'op2', 'op3']
  };
  const submit = (votes) => database.collection('votes').add(votes);

  return (
    <div>
      <div>user:{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Logout
      </button>
      <div>Votación</div>
      <VoteList options={options} />
      <button type="button" onClick={(votes) => submit(fakeVote)}>
        Submit
      </button>
    </div>
  );
};
