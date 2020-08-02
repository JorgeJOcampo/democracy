import React from 'react';
import VoteList from 'components/VoteList';
import { isBrowser } from 'react-device-detect';
import Results from 'components/Results';
import { useParams } from 'react-router-dom';
import { usePoll } from './hooks';
import { Container, PollContainer } from './styles';

export default () => {
  const { id } = useParams();

  const [
    { options, voted, pollName, maxSelectable, loading },
    submit
  ] = usePoll();

  if (loading) {
    return (
      <div className="pollContent">
        <div className="pollContainer">
          <div className="img" />
          <div className="success">Loading...</div>
        </div>
      </div>
    );
  }

  if (voted) {
    return <Results id={id} />;
  }

  return (
    <Container>
      <PollContainer>
        {isBrowser && <div className="img" />}
        <div className="pollTitle">{pollName}</div>
        <VoteList options={options} maxSelectable={maxSelectable} />
        <div className="voteBtn">
          <button type="button" onClick={submit} disabled={voted}>
            Votar!
          </button>
        </div>
      </PollContainer>

      {isBrowser && (
        <div className="sideContent">
          <div className="cardsContainer">
            <h1>Cartas</h1>
            <div className="content">
              <p>
                Sistema de cartas aca tenes 3 oportunidades para agregar mas
                tiempo antes de la fecha limite de la finalizacion.
              </p>
              <div className="cards">
                <div className="card" />
                <div className="card" />
                <div className="card-rotated" />
              </div>
            </div>
          </div>
          <div className="resultsContainer">
            <h1>Resultados</h1>
            <div className="resultsList">
              <div className="result">
                <div className="name">asd</div>
                <div className="progress" />
              </div>
              <div className="result">
                <div className="name">sddd</div>
                <div className="progress" />
              </div>
            </div>
          </div>
          <div className="infoContainer">
            <h1>Info</h1>
            <div>
              <span className="infoDate">Fecha de Inicio: </span>
              <span className="date">mm/dd/yy</span>
            </div>
            <div>
              <span className="infoDate">Fecha de Finalizacion: </span>
              <span className="date">mm/dd/yy</span>
            </div>
            <div>
              <span className="infoDate">Fecha por Tiempo Extra: </span>
              <span className="date">mm/dd/yy</span>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};
