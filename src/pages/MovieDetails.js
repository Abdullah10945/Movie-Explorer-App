import React from 'react';
import { useParams } from 'react-router-dom';

const moviesData = [
  { imdbID: '1', Title: 'Inception', Year: '2010', imdbRating: '8.8', Plot: 'A mind-bending thriller about dreams within dreams.' },
  { imdbID: '2', Title: 'The Matrix', Year: '1999', imdbRating: '8.7', Plot: 'A hacker learns about the true nature of reality and his role in it.' },
  { imdbID: '3', Title: 'Interstellar', Year: '2014', imdbRating: '8.6', Plot: 'A team of explorers travels through a wormhole in space.' },
  { imdbID: '4', Title: 'The Dark Knight', Year: '2008', imdbRating: '9.0', Plot: 'Batman battles the Joker in this thrilling superhero epic.' },
  { imdbID: '5', Title: 'Fight Club', Year: '1999', imdbRating: '8.8', Plot: 'An insomniac office worker crosses paths with a soap salesman.' }
];

function MovieDetails() {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.imdbID === id);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Released: {movie.Year}</p>
      <p>Rating: {movie.imdbRating}</p>
      <p>{movie.Plot}</p>
    </div>
  );
}

export default MovieDetails;
