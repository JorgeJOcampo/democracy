import React from 'react';
import ResultsList from 'components/ResultsList';
import { useResults } from './hooks';
import { Results } from './styles';

export default ({ id }) => {
  const results = useResults(id);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Results>
        <h1>Resultados</h1>
        <ResultsList votes={results} />
      </Results>
    </div>
  );
};
