import { useRecoilValue, useSetRecoilState } from 'recoil';
import { votesState } from 'state/voteState';

const votes = useRecoilValue(votesState);
const setVotes = useSetRecoilState(votesState);

export const addVote = (vote) => setVotes([...votes, vote]);

export const removeVote = (id) => {
  const currentVote = votes.find((vote) => vote.id === id);
  return setVotes([
    ...votes.slice(0, votes.indexOf(currentVote)),
    ...votes.slice(votes.indexOf(currentVote) + 1, votes.length)
  ]);
};
