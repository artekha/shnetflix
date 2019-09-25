import React from 'react';
import cx from 'classnames';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import SearchField from '../SearchField';
import MoviesList from '../MoviesList';
import DetailedMovie from '../DetailedMovie';

import './App.scss';

const App = ({ history }) => {
  const [searchRequest, setSearchRequest] = React.useState(null);
  const [detailedMovie, setDetailedMovie] = React.useState(null);

  const handleAppChange = () => {
    const { pathname, search } = history.location;
    const parameters = queryString.parse(search);
    if (searchRequest === '' && detailedMovie === null) {
      history.push('/');
    } else if (
      searchRequest === null &&
      detailedMovie === null &&
      pathname === '/' &&
      Object.keys(parameters).length > 0
    ) {
      const { query, movieId } = parameters;
      if (query && query.length > 0) {
        setSearchRequest(query);
      }
      if (movieId && movieId.length > 0) {
        setDetailedMovie(movieId);
      }
    } else if (searchRequest || detailedMovie) {
      let queriesArray = [];
      let composedQueryString = '/';
      if (searchRequest) {
        queriesArray.push(`query=${searchRequest}`);
      }
      if (detailedMovie) {
        queriesArray.push(`movieId=${detailedMovie}`);
      }

      queriesArray.forEach(queryItem => {
        if (composedQueryString.indexOf('?') === -1) {
          composedQueryString += `?${queryItem}`;
        } else {
          composedQueryString += `&${queryItem}`;
        }
      });
      history.push(composedQueryString);
    } else {
      history.push('/');
    }
  };

  React.useEffect(() => {
    handleAppChange();
  }, [searchRequest, detailedMovie]);

  return (
    <div className="app">
      <div
        className={cx('app__main', {
          'app__main_sidebar-displayed': detailedMovie,
        })}
      >
        <h1 className="app__title">Shnetflix</h1>
        <SearchField
          searchRequest={searchRequest}
          setSearchRequest={setSearchRequest}
        />
        {searchRequest && (
          <MoviesList
            searchRequest={searchRequest}
            setDetailedMovie={setDetailedMovie}
          />
        )}
      </div>
      {detailedMovie && (
        <div className="app__sidebar">
          <DetailedMovie
            movieId={detailedMovie}
            setDetailedMovie={setDetailedMovie}
          />
        </div>
      )}
    </div>
  );
};
export default withRouter(App);
