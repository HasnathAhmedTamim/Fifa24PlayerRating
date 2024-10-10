// import React from "react";

// const PlayerDetails = ({ player, onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-xl font-bold mb-4">{player.name}</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="flex flex-col">
//             <span className="font-semibold">Position:</span>
//             <span>{player.position}</span>
//           </div>

//           <div className="flex flex-col">
//             <span className="font-semibold">Strength:</span>
//             <span>{player.strength}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold">Aggression:</span>
//             <span>{player.aggression}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold">Nation:</span>
//             <span>{player.nation}</span>
//             <img
//               src={player.nationFlag}
//               alt={`${player.nation}'s flag`}
//               className="h-8 w-8 object-cover mt-1"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://via.placeholder.com/50"; // Placeholder image
//               }}
//             />
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold">Club:</span>
//             <span>{player.club}</span>
//             <img
//               src={player.clubLogo}
//               alt={`${player.club} logo`}
//               className="h-8 w-8 object-cover mt-1"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://via.placeholder.com/50"; // Placeholder image
//               }}
//             />
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold">Age:</span>
//             <span>{player.age}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold">Height:</span>
//             <span>{player.height}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold">Weight:</span>
//             <span>{player.weight}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold">FIFA Version:</span>
//             <span>{player.fifaVersion}</span>
//           </div>
//         </div>

//         <div className="flex flex-col mt-4">
//           <span className="font-semibold">Play Style:</span>
//           <span>{player.playStyle}</span>
//           <img
//             src={player.playStyleIcon}
//             alt={`${player.playStyle} icon`}
//             className="h-8 w-8 object-cover mt-1"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "https://via.placeholder.com/50"; // Placeholder image
//             }}
//           />
//         </div>

//         <button
//           onClick={onClose}
//           className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlayerDetails;
import React from "react";

const PlayerDetails = ({ player, onClose }) => {
  if (!player) return null; // Handle case when no player is provided

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{player.name}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Excluded Position */}

          <div className="flex flex-col">
            <span className="font-semibold">Overall Rating:</span>
            <span>{player.overall}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">Club:</span>
            <span>{player.club}</span>
            <img
              src={player.clubLogo}
              alt={`${player.club} logo`}
              className="h-8 w-8 object-cover mt-1"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/50"; // Placeholder image
              }}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">Nation:</span>
            <span>{player.nation}</span>
            <img
              src={player.nationFlag}
              alt={`${player.nation}'s flag`}
              className="h-8 w-8 object-cover mt-1"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/50"; // Placeholder image
              }}
            />
          </div>

          {/* Remaining attributes */}
          <div className="flex flex-col">
            <span className="font-semibold">Age:</span>
            <span>{player.age}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Height:</span>
            <span>{player.height}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Weight:</span>
            <span>{player.weight}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Pace:</span>
            <span>{player.pace}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Shooting:</span>
            <span>{player.shooting}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Passing:</span>
            <span>{player.passing}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Dribbling:</span>
            <span>{player.dribbling}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Defending:</span>
            <span>{player.defending}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Physicality:</span>
            <span>{player.physicality}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">FIFA Version:</span>
            <span>{player.fifaVersion}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PlayerDetails;
