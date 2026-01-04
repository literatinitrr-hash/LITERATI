import "./admin.css";

export default function ScoreboardCard({ children }) {
  return (
    <section
      className="scoreboard-card"
      role="region"
      aria-label="Scoreboard"
    >
      <div className="scoreboard-card-inner">
        {children}
      </div>
    </section>
  );
}
