import { Plus, Minus } from "lucide-react";
import "./admin.css";

export default function QuestRow({
  label,
  points,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="quest-row">
      <span className="quest-label">{label}</span>

      <div className="quest-controls">
        <button
          className="quest-btn minus"
          onClick={onDecrement}
          aria-label="Decrease points"
        >
          <Minus size={14} />
        </button>

        <span className="quest-points">{points}</span>

        <button
          className="quest-btn plus"
          onClick={onIncrement}
          aria-label="Increase points"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}
