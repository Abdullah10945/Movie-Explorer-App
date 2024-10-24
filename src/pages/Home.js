import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const moviesData = [
  { imdbID: '1', Title: 'Inception', Year: '2010', imdbRating: '8.8' },
  { imdbID: '2', Title: 'The Matrix', Year: '1999', imdbRating: '8.7' },
  { imdbID: '3', Title: 'Interstellar', Year: '2014', imdbRating: '8.6' },
  { imdbID: '4', Title: 'The Dark Knight', Year: '2008', imdbRating: '9.0' },
  { imdbID: '5', Title: 'Fight Club', Year: '1999', imdbRating: '8.8' }
];

function Home() {
  const [movies, setMovies] = useState(moviesData);
  //const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.Title.toLowerCase().includes(term.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div>
      <SearchBar setSearchTerm={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
