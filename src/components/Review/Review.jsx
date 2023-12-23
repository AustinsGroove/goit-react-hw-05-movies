import Wrapper from './Review.styled';

const Review = ({ review }) => {
  const { author, content } = review;
  return (
    <Wrapper>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </Wrapper>
  );
};

export default Review;
