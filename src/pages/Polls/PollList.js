import React from 'react';
import { Link } from 'react-router-dom';
import PollOptions from './PollOptions';

export default ({ polls }) => {
  const pollsMap = polls.map(({ id, name, created_by: createdBy, options }) => (
    <Link to={`/polls/${id}`}>
      <div>{name}</div>
      <div>
        Creada por: {createdBy.name}({createdBy.email})
      </div>
      <PollOptions options={options} />
    </Link>
  ));
  return <>{pollsMap}</>;
};
