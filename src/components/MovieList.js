import React from 'react';
import { Link } from 'react-router-dom';



const MovieList = ({movies}) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title} ({movie.releaseDate}) - Rating: {movie.rating}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
