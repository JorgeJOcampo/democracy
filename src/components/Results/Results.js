import React from 'react';
import { useParams } from 'react-router-dom';
import ResultsList from 'components/ResultsList';
import { useResults } from './hooks';

export default ({ id }) => {
  // const { id } = useParams();

  const results = useResults(id);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Resultados votación:</div>
      <ResultsList votes={results} />
    </div>
  );
};
