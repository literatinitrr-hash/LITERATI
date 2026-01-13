import { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import axios from "axios";
import "./Leaderboard.css";

const getRankClass = (rank) => {
  if (rank === 1) return "rank-1";
  if (rank === 2) return "rank-2";
  if (rank === 3) return "rank-3";
  return "rank-default";
};

function Leaderboard() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get(
          `${API}/api/users/leaderboard`,
          token
            ? {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            : {}
        );

        if (res.data.success) {
          const rankedData = res.data.leaderboard.map((user, index) => ({
            id: user._id,
            rank: index + 1,
            name: user.name,
            points: user.totalPoints ?? 0,
          }));

          setStandings(rankedData);
        }
      } catch (err) {
        console.error("Leaderboard fetch failed");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <FaCrown className="crown-icon" />
        <h1>OVERALL STANDINGS</h1>
      </div>

      {loading && <p className="leaderboard-loading">Loading...</p>}

      {!loading &&
        standings.map((item) => (
          <div key={item.id} className="leaderboard-row">
            <div className="leaderboard-left">
              <div className={`rank-circle ${getRankClass(item.rank)}`}>
                {item.rank}
              </div>
              <h2 className="player-name">{item.name}</h2>
            </div>

            <div className="points">
              {item.points.toLocaleString()}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Leaderboard;