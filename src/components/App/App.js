import React from 'react';
import queryString from 'query-string';
import { Route, Switch, withRouter } from 'react-router-dom';

import SearchField from '../SearchField';
import MoviesList from '../MoviesList';
import DetailedMovie from '../DetailedMovie';

import './App.scss';

const App = ({ history }) => {
  const [searchRequest, setSearchRequest] = React.useState(null);
  const [detailedMovie, setDetailedMovie] = React.useState(null);
  React.useEffect(() => {
    const { pathname, search } = history.location;
    const parameters = queryString.parse(search);
    if (
      searchRequest === null &&
      pathname === '/search' &&
      parameters.q &&
      parameters.q.length > 0
    ) {
      history.push(`/search?q=${parameters.q}`);
      setSearchRequest(parameters.q);
    } else if (searchRequest) {
      history.push(`/search?q=${searchRequest}`);
    } else {
      history.push('/');
    }
  }, [searchRequest, history]);

  return (
    <div className="app">
      <h1 className="app__title">Shnetflix</h1>
      <SearchField
        searchRequest={searchRequest}
        setSearchRequest={setSearchRequest}
      ></SearchField>
      <Route
        path="/search"
        component={() => (
          <MoviesList
            searchRequest={searchRequest}
            setDetailedMovie={setDetailedMovie}
          ></MoviesList>
        )}
      />
      <DetailedMovie></DetailedMovie>
    </div>
  );
};
export default withRouter(App);
