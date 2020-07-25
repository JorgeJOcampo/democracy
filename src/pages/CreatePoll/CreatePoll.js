import React, { useState, useRef } from 'react';
import voteService from 'services/voteService';
import { useSession } from 'hooks/userHooks';
import VoteCreated from './VoteCreated';

export default () => {
  const [user] = useSession();
  const [options, setOptions] = useState(['Opción 1']);
  const [voteCreated, setVoteCreated] = useState(false);
  const pollNameRef = useRef();
  const maxSelectable = useRef();
  const newOption = () =>
    setOptions([...options, `Opción ${options.length + 1}`]);
  const createPoll = () =>
    voteService.createPoll({
      name: pollNameRef.current.value,
      created_by: { uid: user.uid, name: user.displayName, email: user.email },
      max_selectable: +maxSelectable.current.value,
      options
    }) && setVoteCreated(true);
  const optionList = options.map((option) => <div key={option}>{option}</div>);

  if (voteCreated) {
    return <VoteCreated />;
  }

  return (
    <div>
      <div>Nombre de la votación:</div>
      <input ref={pollNameRef} defaultValue="Votación" />
      <div>Cuántas opciones se puede votar?</div>
      <input type="number" ref={maxSelectable} defaultValue={2} />
      {optionList}
      <button type="button" onClick={newOption} disabled={voteCreated}>
        Nueva opción
      </button>
      <br />
      <button type="button" onClick={createPoll}>
        Crear votación
      </button>
    </div>
  );
};
