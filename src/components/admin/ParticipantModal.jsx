import { X, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./admin.css";

export default function ParticipantModal({ participant, onClose, onRefresh }) {
  const modalRef = useRef(null);

  const [eventCode, setEventCode] = useState("");
  const [points, setPoints] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!participant) return null;

  const {
    _id,
    name,
    totalPoints = 0,
    eventScores = []
  } = participant;


  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleSubmit = async () => {
    if (!eventCode || !points) {
      setError("Event code and points are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const API = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem("token");

      await axios.post(
        `${API}/api/admin/users/${_id}/events/${eventCode}/points`,
        {
          points: Number(points),
          reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onRefresh();   // reload leaderboard
      onClose();     // close modal
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || "Failed to update points");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose} />

      <div
        className="participant-modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-block">
            <Trophy size={18} />
            <h3>{name}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="total-points-card">
          <span>Total Points</span>
          <strong>{totalPoints}</strong>
        </div>

        <div className="event-score-list">
          <h4>Event Scores</h4>
          {eventScores.length === 0 && <p>No events yet</p>}
          {eventScores.map((e) => (
            <div key={e.eventCode} className="event-row">
              <span>{e.eventCode}</span>
              <strong>{e.points}</strong>
            </div>
          ))}
        </div>

        <div className="update-points-form">
          <h4>Add / Update Points</h4>

          <input
            type="text"
            placeholder="Event Name"
            value={eventCode}
            onChange={(e) => setEventCode(e.target.value)}
          />

          <input
            type="number"
            placeholder="Points (+10 or -5)"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />

          <input
            type="text"
            placeholder="Reason (Mandatory)"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          {error && <p className="admin-error">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="admin-login-button"
          >
            {loading ? "Updating..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
