import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import voteService from '../services/voteService';

const PollOptions = ({ options }) => (
  <>
    {options.map((option) => (
      <div key={option}>{option}</div>
    ))}
  </>
);

const Polls = ({ polls }) => {
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

export default () => {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    voteService.getPolls().then((results) => setPolls(results));
  });
  return (
    <div>
      <div>Votaciones</div>
      <Polls polls={polls} />
    </div>
  );
};
