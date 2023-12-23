import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Wrapper from './SearchForm.styled';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const searchParameter = query.trim();
    if (!searchParameter) {
      alert('Please enter your search query!');
      return;
    }
    setSearchParams({ query });
  };

  useEffect(() => {
    const urlQuery = searchParams.get('query');
    urlQuery && setQuery(urlQuery);
  }, [searchParams]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
