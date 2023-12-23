import { getMovieCast } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastItem from 'components/CastItem/CastItem';
import Wrapper from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [castArr, setCastArr] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await getMovieCast(movieId);
      setCastArr(data.cast);
    };
    getData();
  }, [movieId]);

  return (
    <Wrapper>
      {castArr.length === 0 && (
        <p className="notFoundMessage">
          We dont have any cast info for this movie.
        </p>
      )}
      <ul>
        {castArr.map(castItem => {
          return (
            <li key={castItem.id}>
              <CastItem castItem={castItem} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Cast;
