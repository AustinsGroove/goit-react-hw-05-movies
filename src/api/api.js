import { queryInstance } from './config';

const language = 'en-US';

export const getTrandingMovies = async () => {
  const trandingPeriod = 'day';
  try {
    const { data } = await queryInstance(
      `trending/movie/${trandingPeriod}?language=${language}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchForMovies = async query => {
  const includeAdult = false;
  const page = 1;
  try {
    const { data } = await queryInstance(
      `search/movie?query=${query}&include_adult=${includeAdult}&language=${language}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const { data } = await queryInstance(
      `movie/${movieId}?language=${language}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async movieId => {
  try {
    const { data } = await queryInstance(
      `movie/${movieId}/credits?${language}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  const page = 1;
  try {
    const { data } = await queryInstance(
      `movie/${movieId}/reviews?${language}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
