import { Trophy } from "lucide-react";
import "./admin.css";

export default function JungleHeader() {
  return (
    <header className="jungle-header">
      <div className="jungle-header-content">
        <Trophy className="trophy-icon left" />

        <div className="title-block">
          <h1 className="dashboard-title">Club Admin Dashboard</h1>
          <p className="dashboard-subtitle">
            Jungle Book LitFest • Score Control
          </p>
        </div>

        <Trophy className="trophy-icon right" />
      </div>
    </header>
  );
}
