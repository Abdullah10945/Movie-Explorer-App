import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Favorites() {
  const { favorites } = useContext(ThemeContext);

  if (favorites.length === 0) {
    return <p>No favorites yet!</p>;
  }

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
