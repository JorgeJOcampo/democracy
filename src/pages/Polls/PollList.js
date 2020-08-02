import React from 'react';
import { Link } from 'react-router-dom';
import { Poll } from './../../styles';

export default ({ polls }) => {
  const pollsMap = polls.map(({ id, name, created_by: createdBy }) => (
    <Link className="poll" to={`/polls/${id}`} key={id}>
      <Poll>
        <div className="pollImg"></div>
        <div>
          <p className="pollName">{name}</p>
          <p className="pollDate">Empieza el 01/03 Termina el 26/03</p>
        </div>
      </Poll>
    </Link>
  ));
  return <>{pollsMap}</>;
};
