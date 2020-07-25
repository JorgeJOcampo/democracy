import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useSession } from 'hooks/userHooks';
import voteService from 'services/voteService';
import { pollOptionsState } from './state';

export const usePoll = () => {
  const [user] = useSession();
  const [pollCreated, setPollCreated] = useState(false);
  const [pollName, setPollName] = useState('Votación');
  const [maxSelectable, setMaxSelectable] = useState(2);
  const options = useRecoilValue(pollOptionsState);
  // const [options, setOptions] = useState(['Opción 1']);
  const updatePollName = ({ target: { value } }) => setPollName(value);
  const updateMaxSelectable = ({ target: { value } }) =>
    setMaxSelectable(value);
  // const createOption = () =>
  //   setOptions([...options, `Opción ${options.length + 1}`]);
  const createPoll = () =>
    voteService.createPoll({
      name: pollName,
      created_by: { uid: user.uid, name: user.displayName, email: user.email },
      max_selectable: +maxSelectable,
      options
    }) && setPollCreated(true);

  return [
    { pollCreated, pollName, maxSelectable },
    createPoll,
    updatePollName,
    updateMaxSelectable
  ];
};
