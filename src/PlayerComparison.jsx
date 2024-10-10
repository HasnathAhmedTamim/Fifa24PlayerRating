// src/PlayerComparison.jsx
import { useLocation, useNavigate } from "react-router-dom";

const PlayerComparison = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { players } = location.state || { players: [] };

  return (
    <div className="comparison-page p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-slate-50">
        Player Comparison
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {players.map((player, index) => (
          <div key={index} className="p-4 bg-gray-800 text-white rounded-lg">
            <h3 className="text-xl font-semibold text-center">{player.name}</h3>
            <p>
              <strong>Position:</strong> {player.position}
            </p>
            <p>
              <strong>Overall:</strong> {player.overall}
            </p>
            <p>
              <strong>Club:</strong> {player.club}
            </p>
            <p>
              <strong>Nation:</strong> {player.nation}
            </p>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-6" onClick={() => navigate("/")}>
        Back to Player List
      </button>
    </div>
  );
};

export default PlayerComparison;
