import { Eye } from "lucide-react";
import "./admin.css";

export default function ParticipantRow({
  rank,
  name,
  points,
  isTop,
  onView,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onView();
    }
  };

  return (
    <div
      className={`participant-row ${isTop ? "top-rank" : ""}`}
      role="listitem"
      tabIndex={0}
      onClick={onView}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${name}`}
    >
      <div className="participant-left">
        <span className="rank-badge">#{rank}</span>
        <span className="participant-name">{name}</span>
      </div>

      <div className="participant-right">
        <span className="participant-points">{points}</span>

        <button
          className="view-btn"
          onClick={(e) => {
            e.stopPropagation();
            onView();
          }}
          aria-label={`View ${name}`}
        >
          <Eye size={18} />
        </button>
      </div>
    </div>
  );
}
