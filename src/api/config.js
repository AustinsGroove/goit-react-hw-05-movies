import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const accessToken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjlhOGY4ODJlN2VhZTYyMTdiMmIxMzJkYzlmMjVmNyIsInN1YiI6IjY1ODJlNDI3ZjE3NTljM2ZhMjEwY2I2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6GcLi7AwoXQH8XXcYQTD10rkoTo49Caw6O84bZ_YnU';
const baseImageUrl = 'https://image.tmdb.org/t/p/w440_and_h660_face';

const queryInstance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization: accessToken,
  },
});

export { queryInstance, baseImageUrl };
