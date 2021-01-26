const backdropUri = (movie) =>
  movie ? `http://image.tmdb.org/t/p/w780${movie.backdrop_path}` : '';

const posterUri = (movie) =>
  movie ? `http://image.tmdb.org/t/p/w780${movie.backdrop_path}` : '';

const movieUri = {
  backdropUri,
  posterUri,
};

export default movieUri;
