import React, { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import "./Leaderboard.css";

const getRankClass = (rank) => {
  if (rank === 1) return "rank-1";
  if (rank === 2) return "rank-2";
  if (rank === 3) return "rank-3";
  return "rank-default";
};

function Leaderboard() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/users/leaderboard", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})

    .then(res => res.json())
    .then(data => {
      if (data.success) {
        const rankedData = data.leaderboard.map((user, index) => ({
          id: user._id,
          rank: index + 1,
          name: user.name,
          points: user.totalPoints
        }));
        setStandings(rankedData);
      }
    })
    .catch(err => console.error("Leaderboard error:", err));
}, []);


  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <FaCrown className="crown-icon" />
        <h1>OVERALL STANDINGS</h1>
      </div>

      {standings.map((item) => (
        <div key={item.id} className="leaderboard-row">
          <div className="leaderboard-left">
            <div className={`rank-circle ${getRankClass(item.rank)}`}>
              {item.rank}
            </div>
            <h2 className="player-name">{item.name}</h2>
          </div>
          <div className="points">{item.points}</div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
