import { Link, useLocation } from 'react-router-dom';
import { baseImageUrl } from 'api/config';
import defaultImg from 'img/defaultImage';
import Wrapper from './MoviesListItem.styled';

const MoviesListItem = ({
  movie: { id, title, poster_path, vote_average },
}) => {
  const location = useLocation();
  return (
    <Wrapper>
      <Link to={`/movies/${id}`} state={location}>
        <div>
          <img
            src={poster_path ? `${baseImageUrl}${poster_path}` : defaultImg}
            alt="movie poster"
          />
        </div>
        <div className="movieInfo">
          <h4>{title}</h4>
          <p className="userScore">User score: {vote_average}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default MoviesListItem;
