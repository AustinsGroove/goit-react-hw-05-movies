import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/api';
import Review from 'components/Review/Review';
import Wrapper from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviewsArr, setReviewsArr] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await getMovieReviews(movieId);
      setReviewsArr(data.results);
    };
    getData();
  }, [movieId]);

  return (
    <Wrapper>
      {reviewsArr.length === 0 && (
        <p className="notFoundMessage">
          We dont have any reviews for this movie.
        </p>
      )}
      <ul>
        {reviewsArr.map(review => {
          return (
            <li key={review.id}>
              <Review review={review} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Reviews;
