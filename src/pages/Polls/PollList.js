import React from 'react';
import { Link } from 'react-router-dom';

export default ({ polls }) => {
  const pollsMap = polls.map(({ id, name, created_by: createdBy }) => (
    <Link to={`/polls/${id}`} key={id}>
      <div>{name}</div>
      <div>
        Creada por: {createdBy.name}({createdBy.email})
      </div>
      <div>Empieza el 01/03 Termina el 26/03</div>
    </Link>
  ));
  return <>{pollsMap}</>;
};
