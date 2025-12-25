import { Eye } from "lucide-react";
import "./admin.css";

export default function FooterHint() {
  return (
    <div className="footer-hint">
      <div className="footer-hint-glow" />

      <Eye size={16} className="footer-hint-icon" />

      <span className="footer-hint-text">
        Click the eye icon to view and manage quest points
      </span>
    </div>
  );
}
