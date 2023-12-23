import { useEffect, useState } from 'react';
import { getTrandingMovies } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import HomeTitle from 'components/HomeTitle/HomeTitle';

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await getTrandingMovies();
      if (results) {
        setTrandingMovies(results);
      }
    };
    getData();
  }, []);

  return (
    <>
      <HomeTitle />
      <MoviesList movies={trandingMovies} />
    </>
  );
};

export default HomePage;
