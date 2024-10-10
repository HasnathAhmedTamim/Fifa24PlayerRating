// FavoritesContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // Check for stored favorites in localStorage
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const addFavorite = (item) => {
    setFavorites((prev) => {
      const updatedFavorites = [...prev, item];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFavorite = (itemId) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.filter((item) => item.id !== itemId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
