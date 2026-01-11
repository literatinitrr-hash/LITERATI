import "./admin.css";

export default function SubtotalRow({ points = 0 }) {
  return (
    <div
      className="subtotal-row"
      role="status"
      aria-live="polite"
      aria-label="Quest subtotal"
    >
      <span className="subtotal-label">Subtotal</span>
      <span className="subtotal-points">{points}</span>
    </div>
  );
}
