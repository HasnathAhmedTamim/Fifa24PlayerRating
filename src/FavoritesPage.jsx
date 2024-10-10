// FavoritesPage.jsx
import React from "react";
import { useFavorites } from "./FavoritesContext";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2 className="text-2xl">Favorites</h2>
      <div className="grid grid-cols-1 gap-4">
        {favorites.map((item) => (
          <div key={item.id} className="border p-4">
            <h3>{item.name}</h3>
            {/* Optionally add a button to remove from favorites */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
