const API_KEY = '3dfd16e9a8a6b3c86b996798a3deac13';

const categories = [
  {
    name: 'trending',
    title: 'Em alta',
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: 'netflixOriginals',
    title: 'Originais Netflix',
    path: `/discover/tv?api_key=${API_KEY}&with_companies=213`,
  },
  {
    name: 'topRated',
    title: 'Populares',
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: 'romances',
    title: 'Romances',
    path: `/discover/tv?api_key=${API_KEY}&with_genre=10749`,
  },
  {
    name: 'comedy',
    title: 'Comédias',
    path: `/discover/tv?api_key=${API_KEY}&with_genre=35`,
  },
  {
    name: 'documentaries',
    title: 'Documentários',
    path: `/discover/tv?api_key=${API_KEY}&with_genre=99`,
  },
];

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3/${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('erro: ' + error);
  }
};

export default categories;
