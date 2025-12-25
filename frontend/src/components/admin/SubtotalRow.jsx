import "./admin.css";

export default function SubtotalRow({ points }) {
  return (
    <div className="subtotal-row">
      <span className="subtotal-label">Subtotal</span>
      <span className="subtotal-points">{points}</span>
    </div>
  );
}
