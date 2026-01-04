import { Plus, Minus } from "lucide-react";
import "./admin.css";

export default function QuestRow({
  label,
  points,
  onIncrement,
  onDecrement,
}) {
  const handleKey = (e, action) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="quest-row" role="group" aria-label={label}>
      <span className="quest-label">{label}</span>

      <div className="quest-controls">
        <button
          className="quest-btn minus"
          onClick={onDecrement}
          onKeyDown={(e) => handleKey(e, onDecrement)}
          aria-label={`Decrease points for ${label}`}
          disabled={points <= 0}
        >
          <Minus size={14} />
        </button>

        <span
          className="quest-points"
          aria-live="polite"
          aria-atomic="true"
        >
          {points}
        </span>

        <button
          className="quest-btn plus"
          onClick={onIncrement}
          onKeyDown={(e) => handleKey(e, onIncrement)}
          aria-label={`Increase points for ${label}`}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}
