// src/components/PlayerDetails.jsx


import { useLocation } from "react-router-dom";

const PlayerDetails = () => {
  const location = useLocation();
  const { player } = location.state;

  if (!player) {
    return <div>No player details available.</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">{player.name}</h2>
      <img src={player.picture} alt={player.name} className="mb-4" />
      <p>
        <strong>Position:</strong> {player.position}
      </p>
      <p>
        <strong>Overall Rating:</strong> {player.overall}
      </p>
      <p>
        <strong>Club:</strong> {player.club}
      </p>
      <p>
        <strong>Country:</strong> {player.nation}
      </p>
      {/* Add more player details as needed */}
    </div>
  );
};

export default PlayerDetails;
