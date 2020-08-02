import { useState, useEffect } from 'react';
import voteService from 'services/voteService';
import { getResults } from 'utils/voteUtils';

export const useResults = (id) => {
  const [poll, setPoll] = useState();
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    voteService.getPoll(id).then((result) => setPoll(result));
    voteService.onChange(id, (results) => setVotes(results));
  }, [id]);

  return getResults(poll, votes);
};
