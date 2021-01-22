import 'dotenv/config';

export default {
  name: 'MoviesInc',
  version: '1.0.0',
  extra: {
    moviesApiKey: process.env.REACT_NATIVE_MOVIES_DB_API_KEY,
  },
};
