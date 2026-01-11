import "./admin.css";

export default function ScoreboardHeader({
  title = "Scoreboard",
  subtitle = "Manage team points and rankings",
}) {
  return (
    <header
      className="scoreboard-header"
      role="heading"
      aria-level={2}
    >
      <h2 className="scoreboard-title">
        {title}
      </h2>
      <p className="scoreboard-subtitle">
        {subtitle}
      </p>
    </header>
  );
}
