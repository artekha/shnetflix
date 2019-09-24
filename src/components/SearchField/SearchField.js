import React from 'react';
import { Input } from 'reactstrap';

import { useDebounce } from '../../helpers/hooks';

import './SearchField.scss';

const SearchField = ({ searchRequest, setSearchRequest }) => {
  const normalizeValue = value => value || '';
  const [inputValue, setInputValue] = React.useState(
    normalizeValue(searchRequest),
  );

  const debouncedSearchValue = useDebounce(inputValue, 500);

  const handleChange = event => setInputValue(event.target.value);

  React.useEffect(() => setInputValue(normalizeValue(searchRequest)), [
    searchRequest,
  ]);

  React.useEffect(() => setSearchRequest(debouncedSearchValue), [
    debouncedSearchValue,
  ]);

  return (
    <Input
      onChange={handleChange}
      value={inputValue}
      className="search-field"
      placeholder="Start typing..."
    ></Input>
  );
};

export default SearchField;

// export default connect(
//   null,
//   {
//     fetchMoviesMapped: fetchMovies,
//   },
// )(SearchField);
