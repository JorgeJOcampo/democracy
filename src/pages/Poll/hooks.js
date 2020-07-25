import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { votesState } from 'state/voteState';
import { useSession } from 'hooks/userHooks';
import voteService from 'services/voteService';

export const usePoll = () => {
  const { id } = useParams();
  const [user] = useSession();
  const [pollName, setPollName] = useState('');
  const [maxSelectable, setMaxSelectable] = useState();
  const [options, setOptions] = useState([]);
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(false);
  const votes = useRecoilValue(votesState);

  const submit = () =>
    voteService.createVote({
      user: { id: user.uid, email: user.email, name: user.displayName },
      poll_id: id,
      votes
    }) && setVoted(true);

  useEffect(() => {
    setLoading(true);
    voteService.getPoll(id).then((poll) => {
      console.log('usePoll -> poll', poll);
      setOptions(voteService.formatOptions(poll.options));
      setPollName(poll.name);
      setMaxSelectable(poll.max_selectable);
      setLoading(false);
    });
  }, [id]);

  return [{ options, voted, pollName, maxSelectable, loading }, submit];
};
