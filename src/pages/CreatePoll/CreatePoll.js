import React from 'react';
import VoteCreated from './VoteCreated';
import { usePoll } from './hooks';
import OptionsList from './OptionsList';

export default () => {
  const [
    { pollCreated, pollName, maxSelectable },
    createPoll,
    updatePollName,
    updateMaxSelectable
  ] = usePoll(false);

  if (pollCreated) {
    return <VoteCreated />;
  }

  return (
    <div>
      <div>Nombre de la votación:</div>
      <input type="text" onChange={updatePollName} value={pollName} />
      <div>Cuántas opciones se puede votar?</div>
      <input
        type="number"
        onChange={updateMaxSelectable}
        value={maxSelectable}
      />
      <OptionsList />
      <br />
      <button type="button" onClick={createPoll}>
        Crear votación
      </button>
    </div>
  );
};
