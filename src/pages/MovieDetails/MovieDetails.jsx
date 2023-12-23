import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/api';
import { baseImageUrl } from 'api/config';
import { NavLink } from 'react-router-dom';
import defaultImg from 'img/defaultImage';
import Wrapper from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(state ?? '/');
  };

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  return (
    movie && (
      <Wrapper>
        <div className="buttonWrapper">
          <button onClick={handleBack}>Back</button>
        </div>
        <div className="movieInfo">
          <div className="moviePosterBox">
            <img
              src={
                movie.poster_path
                  ? `${baseImageUrl}${movie.poster_path}`
                  : defaultImg
              }
              alt="movie poster"
            />
          </div>
          <div className="movieDetails">
            <h1>{movie.title}</h1>
            <p>User score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
        <div className="additionalInfo">
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast">
                <button>Cast</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews">
                <button>Reviews</button>
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </Wrapper>
    )
  );
};

export default MovieDetails;
