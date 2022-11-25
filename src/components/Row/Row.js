import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getMovies } from '../../api';
import './Row.css';

const imageHost = 'https://image.tmdb.org/t/p/original/';

function Row({ title, path, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (error) {}
  };

  const handleOnClick = (movie) => {
    if (trailerUrl || trailerUrl == null) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie.name || movie.title || movie.original_name || '')
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => {
          console.log('Error movie trailer: ', error);
        });
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);
  return (
    <>
      <div className="row-container">
        <h2 className="row-header">{title}</h2>
        <div className="row-cards">
          {movies?.map((movie) => {
            return (
              <img
                className={`movie-card ${isLarge && 'movie-card-large'}`}
                onClick={() => handleOnClick(movie)}
                src={`${imageHost}${
                  isLarge ? movie.backdrop_path : movie.poster_path
                }`}
                key={movie.id}
                alt="Movie"
              />
            );
          })}
        </div>
        {trailerUrl && (
          <ReactPlayer url={trailerUrl} playing={true} volume={null} />
        )}
        {trailerUrl == null && (
          <h3 className="trailer-error-msg">O trailer não foi encontrado!</h3>
        )}
      </div>
    </>
  );
}
export default Row;
