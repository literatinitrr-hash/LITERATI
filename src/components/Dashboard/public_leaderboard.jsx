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

function PublicLeaderboard() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get(`${API}/api/leaderboard`);

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
        console.error("Leaderboard fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <section className="leaderboard-card">
      <div className="leaderboard-card-inner">
        {/* Header */}
        <header className="leaderboard-header">
          <FaCrown className="crown-icon" />
          <div className="leaderboard-title-block">
            <h1 className="leaderboard-title">Overall Standings</h1>
            <p className="leaderboard-subtitle">
              Top performers across all events
            </p>
          </div>
        </header>

        {/* States */}
        {loading && (
          <p className="leaderboard-loading">
            Loading leaderboard...
          </p>
        )}

        {!loading && standings.length === 0 && (
          <p className="leaderboard-empty">
            No standings available yet
          </p>
        )}

        {/* List */}
        {!loading && standings.length > 0 && (
          <div className="leaderboard-list">
            {standings.map((item) => (
              <div
                key={item.id}
                className={`leaderboard-row ${getRankClass(item.rank)}`}
              >
                <div className="leaderboard-left">
                  <div className="rank-circle">{item.rank}</div>
                  <span className="player-name">{item.name}</span>
                </div>

                <div className="points">
                  {item.points.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PublicLeaderboard;