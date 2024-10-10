// ItemCard.jsx
import React from "react";
import { useFavorites } from "./FavoritesContext";

const ItemCard = ({ item }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === item.id);

  return (
    <div className="border p-4">
      <h3>{item.name}</h3>
      <button
        onClick={() =>
          isFavorite ? removeFavorite(item.id) : addFavorite(item)
        }
        className={`mt-2 p-2 ${
          isFavorite ? "bg-red-500" : "bg-blue-500"
        } text-white rounded`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default ItemCard;
