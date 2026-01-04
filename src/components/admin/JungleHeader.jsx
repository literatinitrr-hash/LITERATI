import { Trophy } from "lucide-react";
import "./admin.css";

export default function JungleHeader({
  subtitle = "Jungle Book LitFest • Score Control",
}) {
  return (
    <header className="jungle-header" role="banner">
      <div className="jungle-header-content">
        <Trophy
          className="trophy-icon left"
          aria-hidden="true"
        />

        <div className="title-block">
          <h1 className="dashboard-title">
            Club Admin Dashboard
          </h1>
          <p className="dashboard-subtitle">
            {subtitle}
          </p>
        </div>

        <Trophy
          className="trophy-icon right"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
