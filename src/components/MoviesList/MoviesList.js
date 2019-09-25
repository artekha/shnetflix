import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from 'reactstrap';

import MovieItem from './MovieItem';
import { composeUrl } from '../../helpers/utils';
import { useFetch } from '../../helpers/hooks';

import './MoviesList.scss';

const MoviesList = ({ searchRequest, setDetailedMovie }) => {
  const { fetchData, data, error, fetching } = useFetch(
    composeUrl({ s: searchRequest }),
  );

  React.useEffect(() => {
    fetchData(composeUrl({ s: searchRequest }));
  }, [searchRequest]);

  if (fetching) {
    return (
      <section className="movies-list">
        <div className="movies-spinner">
          <Spinner color="danger" />
        </div>
      </section>
    );
  } else {
    return (
      <section className="movies-list">
        {error && <p className="movies-list__error">Something went wrong</p>}
        {data && data.Error && (
          <p className="movies-list__error">{data.Error}</p>
        )}
        {data && data.Search && (
          <section className="movies-list">
            {data.Search.map(movie => (
              <MovieItem
                key={movie.imdbID}
                movie={movie}
                setDetailedMovie={setDetailedMovie}
              />
            ))}
          </section>
        )}
      </section>
    );
  }
};

MoviesList.propTypes = {
  searchRequest: PropTypes.string.isRequired,
  setDetailedMovie: PropTypes.func.isRequired,
};

export default MoviesList;
