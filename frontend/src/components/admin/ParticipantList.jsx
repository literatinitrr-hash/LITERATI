import "./admin.css";

export default function ParticipantList({ children }) {
  const hasItems = Array.isArray(children)
    ? children.length > 0
    : !!children;

  return (
    <div
      className="participant-list"
      role="list"
      aria-live="polite"
    >
      {hasItems ? (
        children
      ) : (
        <div className="participant-empty">
          No participants found
        </div>
      )}
    </div>
  );
}
