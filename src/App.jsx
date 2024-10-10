// // src/App.jsx

// import { useEffect, useState } from "react";
// import Papa from "papaparse";
// import PlayerDetails from "./PlayerDetails";
// import "./App.css";

// const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

// const App = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [selectedPlayer, setSelectedPlayer] = useState(null);
//   const debouncedSearchTerm = useDebounce(searchTerm, 300);

//   useEffect(() => {
//     const loadData = async () => {
//       const response = await fetch("/Fifa24Ratings.csv");
//       const text = await response.text();
//       const parsedData = Papa.parse(text, { header: true });
//       setData(parsedData.data);
//       setFilteredResults(parsedData.data);
//     };

//     loadData();
//   }, []);

//   useEffect(() => {
//     if (debouncedSearchTerm) {
//       const results = data.filter((player) =>
//         Object.values(player).some((value) =>
//           value.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
//         )
//       );
//       setFilteredResults(results);
//     } else {
//       setFilteredResults(data);
//     }
//   }, [debouncedSearchTerm, data]);

//   const handleViewDetails = (player) => {
//     setSelectedPlayer(player);
//   };

//   const handleCloseDetails = () => {
//     setSelectedPlayer(null);
//   };

//   return (
//     <div className="App p-4">
//       <h1 className="text-4xl font-bold mb-6 text-center text-slate-50">
//         FIFA 24 Player Ratings
//       </h1>
//       <input
//         type="text"
//         placeholder="Search by name, club, position..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="input input-bordered w-full max-w-md mb-4 mx-auto text-white"
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center">
//         {filteredResults.length > 0 ? (
//           filteredResults.map((player, index) => (
//             <div
//               key={index}
//               className="card w-full max-w-xs mx-auto shadow-xl transition-transform transform hover:scale-105 bg-black  p-4"
//             >
//               <figure>
//                 <img
//                   src={player.picture}
//                   alt={player.name}
//                   className="h-20 w-20 object-cover rounded-t-lg"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://via.placeholder.com/150";
//                   }}
//                 />
//               </figure>
//               <div className="card-body text-base">
//                 <h2 className="card-title text-center">{player.name}</h2>
//                 <p className="font-semibold">
//                   <strong>Position:</strong> {player.position}
//                 </p>
//                 <p className="font-semibold">
//                   <strong>Overall:</strong> {player.overall}
//                 </p>
//                 <p className="font-semibold">
//                   <strong>Club:</strong> {player.club}
//                 </p>
//                 <p className="font-semibold">
//                   <strong>Nation:</strong> {player.nation}
//                 </p>
//                 <div className="card-actions justify-end">
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleViewDetails(player)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-white">No results found.</p>
//         )}
//       </div>
//       {selectedPlayer && (
//         <PlayerDetails player={selectedPlayer} onClose={handleCloseDetails} />
//       )}
//     </div>
//   );
// };

// export default App;
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import PlayerDetails from "./PlayerDetails"; // Make sure this component exists
import "./App.css";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [viewingPlayer, setViewingPlayer] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/Fifa24Ratings.csv");
      const text = await response.text();
      const parsedData = Papa.parse(text, { header: true });
      setData(parsedData.data);
      setFilteredResults(parsedData.data);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = data.filter((player) =>
        Object.values(player).some((value) =>
          value.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
      setFilteredResults(results);
    } else {
      setFilteredResults(data);
    }
  }, [debouncedSearchTerm, data]);

  const togglePlayerSelection = (player) => {
    setSelectedPlayers((prevSelected) => {
      if (prevSelected.some((p) => p.name === player.name)) {
        return prevSelected.filter((p) => p.name !== player.name);
      } else if (prevSelected.length < 2) {
        return [...prevSelected, player];
      } else {
        return prevSelected;
      }
    });
  };

  const handleViewDetails = (player) => {
    setViewingPlayer(player); // Set the selected player for details view
  };

  const handleCloseDetails = () => {
    setViewingPlayer(null); // Close the details view
  };

  const handleCompare = () => {
    if (selectedPlayers.length === 2) {
      navigate("/compare", { state: { players: selectedPlayers } });
    }
  };

  return (
    <div className="App p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-slate-50">
        FIFA 24 Player Ratings
      </h1>
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search by name, club, position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-md mx-2 text-white"
        />
        <button
          className="btn btn-primary ml-2"
          onClick={handleCompare}
          disabled={selectedPlayers.length !== 2}
        >
          Compare
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center">
        {filteredResults.map((player, index) => (
          <div
            key={index}
            className="card w-full max-w-xs mx-auto shadow-xl transition-transform transform hover:scale-105 bg-black p-4"
          >
            <figure>
              <img
                src={player.picture}
                alt={player.name}
                className="h-20 w-20 object-cover rounded-t-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
            </figure>
            <div className="card-body text-base">
              <h2 className="card-title text-center">{player.name}</h2>
              <p className="font-semibold">
                <strong>Position:</strong> {player.position}
              </p>
              <p className="font-semibold">
                <strong>Overall:</strong> {player.overall}
              </p>
              <p className="font-semibold">
                <strong>Club:</strong> {player.club}
              </p>
              <p className="font-semibold">
                <strong>Nation:</strong> {player.nation}
              </p>
              <div className="card-actions justify-between">
                <button
                  className="btn btn-info"
                  onClick={() => togglePlayerSelection(player)}
                >
                  {selectedPlayers.some((p) => p.name === player.name)
                    ? "Deselect"
                    : "Compare"}
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleViewDetails(player)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {viewingPlayer && (
        <PlayerDetails player={viewingPlayer} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default App;
