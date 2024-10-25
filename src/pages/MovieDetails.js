import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Movie Details (ID: {id})</h2>
      <p>This page will show details for the selected movie.</p>
    </div>
  );
};

export default MovieDetails;
