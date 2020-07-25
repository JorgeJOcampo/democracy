import React, { useState, useRef } from 'react';
import voteService from '../services/voteService';
import { useSession } from '../hooks/userHooks';

export default () => {
  const [user] = useSession();
  const [options, setOptions] = useState(['Opción 1']);
  const maxSelectable = useRef(3);
  const newOption = () =>
    setOptions([...options, `Opción ${options.length + 1}`]);
  const createVote = () =>
    voteService.createVote({
      created_by: user.uid,
      max_selectable: +maxSelectable.current.value,
      options
    });
  const optionList = options.map((option) => <div>{option}</div>);
  return (
    <div>
      <div>Nombre de votación</div>
      <input
        type="number"
        placeholder="Cuántas opciones se puede votar?"
        ref={maxSelectable}
      />
      {optionList}
      <button type="button" onClick={newOption}>
        Nueva opción
      </button>
      <br />
      <button type="button" onClick={createVote}>
        Crear votación
      </button>
    </div>
  );
};
