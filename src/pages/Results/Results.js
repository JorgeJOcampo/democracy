import React from 'react';
import { useParams } from 'react-router-dom';
import ResultsList from 'components/ResultsList';
import { useResults } from './hooks';

export default () => {
  const { id } = useParams();

  const results = useResults(id);
  console.log('results', results);

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
