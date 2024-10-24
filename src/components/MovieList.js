import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
