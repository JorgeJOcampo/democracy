import React from 'react';
import { useParams } from 'react-router-dom';
import ResultsList from 'components/ResultsList';
import { useResults } from './hooks';
import { Results } from './styles';

export default ({ id }) => {
  // const { id } = useParams();

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
