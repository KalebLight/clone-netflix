import React, { useState, useEffect } from 'react';
import categories, { getMovies } from '../../api';
import './Banner.css';
function Banner() {
  const [movie, setMovie] = useState({});

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === 'netflixOriginals',
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(data?.results[randomIndex]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRandomMovie();
  }, []);
  return (
    <>
      <header
        className="banner-container"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          roundPosition: 'relative',
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-button-container">
            <button className="banner-button">Assistir</button>
            <button className="banner-button">Minha Lista</button>
          </div>
          <div className="banner-description">
            <h2>{movie?.overview}</h2>
          </div>
        </div>
      </header>
    </>
  );
}
export default Banner;
