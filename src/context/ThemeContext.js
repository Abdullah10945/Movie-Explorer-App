import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, favorites, addFavorite }}>
      {children}
    </ThemeContext.Provider>
  );
}
