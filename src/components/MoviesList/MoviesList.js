import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from 'reactstrap';

import MovieItem from './MovieItem';
import { API_ENDPOINT } from '../../helpers/endpoints';
import { useFetch } from '../../helpers/hooks';

import './MoviesList.scss';

const MoviesList = ({ searchRequest, setDetailedMovie }) => {
  const { serverResponse, serverError, fetching } = useFetch(API_ENDPOINT, {
    s: searchRequest,
  });
  if (fetching) {
    return (
      <div className="movies-spinner">
        <Spinner color="danger" />
      </div>
    );
  }
  if (serverResponse && serverResponse.Search) {
    return (
      <section className="movies-list">
        {serverResponse.Search.map(movie => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            onClick={() => setDetailedMovie(movie.imdbID)}
          ></MovieItem>
        ))}
      </section>
    );
  } else {
    return <p>LOL</p>;
  }
};

MoviesList.propTypes = {
  searchRequest: PropTypes.string.isRequired,
  setDetailedMovie: PropTypes.func.isRequired,
};

export default MoviesList;
