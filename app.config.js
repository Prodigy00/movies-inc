import 'dotenv/config';

export default {
  name: 'MoviesInc',
  android: {
    package: 'com.giddyjs.moviesinc',
  },
  version: '1.0.0',
  extra: {
    moviesApiKey: process.env.REACT_NATIVE_MOVIES_DB_API_KEY,
  },
};
