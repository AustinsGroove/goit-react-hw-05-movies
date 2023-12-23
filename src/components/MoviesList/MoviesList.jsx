import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import Wrapper from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <Wrapper>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <MoviesListItem movie={movie} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default MoviesList;
