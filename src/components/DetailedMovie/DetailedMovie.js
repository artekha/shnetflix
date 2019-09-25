import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

import { composeUrl } from '../../helpers/utils';
import { useFetch } from '../../helpers/hooks';

import './DetailedMovie.scss';

const DetailedMovie = ({ movieId, setDetailedMovie }) => {
  const { fetchData, data, error, fetching } = useFetch(
    composeUrl({ i: movieId, plot: 'full' }),
  );

  React.useEffect(() => {
    fetchData(composeUrl({ i: movieId, plot: 'full' }));
  }, [movieId]);

  console.log(data);
  return (
    <article className="detailed-movie">
      {fetching && (
        <div className="detailed-movie__spinner">
          <Spinner color="danger" />
        </div>
      )}
      {error && <p className="detailed-movie__error">Something went wrong</p>}
      {data && data.Error && (
        <p className="detailed-movie__error">{data.Error}</p>
      )}
      {data && !data.Error && (
        <React.Fragment>
          <div
            className="detailed-movie__close"
            onClick={() => setDetailedMovie(null)}
          >
            Close
          </div>
          <div className="detailed-movie__head">
            <div className="detailed-movie__head-info">
              <h2 className="detailed-movie__title">{data.Title}</h2>
              <p className="detailed-movie__head-item">
                <span>Year:</span>
                <span>{data.Year}</span>
              </p>
              <p className="detailed-movie__head-item">
                <span>Runtime:</span>
                <span>{data.Runtime}</span>
              </p>
              <p className="detailed-movie__head-item">
                <span>Country:</span>
                <span>{data.Country}</span>
              </p>
              <p className="detailed-movie__head-item">
                <span>Genre:</span>
                <span>{data.Genre}</span>
              </p>
              <p className="detailed-movie__head-item">
                <span>Actors:</span>
                <span>{data.Actors}</span>
              </p>
            </div>
            <div className="detailed-movie__poster">
              <img src={data.Poster} alt="Movie poster" />
            </div>
          </div>
          <p className="detailed-movie__plot">{data.Plot}</p>
          <ul className="detailed-movie__ratings">
            {data.Ratings.map((rating, index) => (
              <li className="detailed-movie__rating">
                <span>{rating.Source}:</span>
                <span>{rating.Value}:</span>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </article>
  );
};

DetailedMovie.propTypes = {
  movieId: PropTypes.string.isRequired,
  setDetailedMovie: PropTypes.func.isRequired,
};

export default DetailedMovie;
