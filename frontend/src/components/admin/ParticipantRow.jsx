import { Eye } from "lucide-react";
import "./admin.css";

export default function ParticipantRow({
  rank,
  name,
  points,
  isTop,
  onView,
}) {
  return (
    <div className={`participant-row ${isTop ? "top-rank" : ""}`}>
      <div className="participant-left">
        <span className="rank-badge">#{rank}</span>
        <span className="participant-name">{name}</span>
      </div>

      <div className="participant-right">
        <span className="participant-points">{points}</span>

        <button
          className="view-btn"
          onClick={onView}
          aria-label="View participant details"
        >
          <Eye size={18} />
        </button>
      </div>
    </div>
  );
}
