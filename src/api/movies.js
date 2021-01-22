import wretch from 'wretch';

const movies = wretch('https://api.themoviedb.org/3');

export default movies;
