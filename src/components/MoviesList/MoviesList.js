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
      <div className="movies-spinner">
        <Spinner color="danger" />
      </div>
    );
  }
  if (data) {
    if (data.Search) {
      return (
        <section className="movies-list">
          {data.Search.map(movie => (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
              setDetailedMovie={setDetailedMovie}
            ></MovieItem>
          ))}
        </section>
      );
    }
    if (data.Error) {
      return <p className="movies-list__error">{data.Error}</p>;
    }
  }
  if (error) {
    return (
      <p className="movies-list__error">
        Seems like server is not available at the moment, try again later
      </p>
    );
  }
  return <p>Try to type your request in the search field</p>;
};

MoviesList.propTypes = {
  searchRequest: PropTypes.string.isRequired,
  setDetailedMovie: PropTypes.func.isRequired,
};

export default MoviesList;
