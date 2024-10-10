// src/components/PlayerTable.jsx

import React from "react";
import { Link } from "react-router-dom";

const PlayerTable = ({ players }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Picture</th>
          <th className="border border-gray-300 p-2">Position</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td className="border border-gray-300 p-2">
              <Link
                to={`/player/${index}`}
                state={{ player }} // Pass player details to the details page
              >
                {player.name}
              </Link>
            </td>
            <td className="border border-gray-300 p-2">
              <img
                src={player.picture}
                alt={player.name}
                style={{ width: "50px" }}
              />
            </td>
            <td className="border border-gray-300 p-2">{player.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
