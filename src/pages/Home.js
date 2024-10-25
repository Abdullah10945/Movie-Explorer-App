import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const movies = [
    { id: 1, title: 'Inception', releaseDate: '2010', rating: '8.8' },
    { id: 2, title: 'Interstellar', releaseDate: '2014', rating: '8.6' }
  ];
  useEffect(()=>{
    setSearchResults(movies)
  },[])
  const handleSearch = (query) => {
    if (query !== "") {
      const newData = searchResults?.filter((item)=> item.title.toLowerCase().includes(query.toLowerCase()))
      setSearchResults(newData)
    }else{
      setSearchResults(movies)
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default Home;
