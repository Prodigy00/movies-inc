import genres from './genres.json';

export const normalizedGenres = () => {
  let genresArr = genres.genres.map((genre) => genre);

  let genresObj = {};

  for (let i = 0; i < genresArr.length; i++) {
    let id = genresArr[i].id;
    let name = genresArr[i].name;
    genresObj[id] = name;
  }

  return genresObj;
};
