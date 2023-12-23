import SearchForm from 'components/SearchForm/SearchForm';
import { searchForMovies } from 'api/api';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await searchForMovies(query);
      setMovies(data.results);
    };
    getData();
  }, [query]);

  return (
    <>
      <SearchForm />
      {query && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
