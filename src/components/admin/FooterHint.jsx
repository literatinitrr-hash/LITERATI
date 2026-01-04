import { Eye, X } from "lucide-react";
import { useState } from "react";
import "./admin.css";

export default function FooterHint() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="footer-hint" role="note" aria-live="polite">
      <div className="footer-hint-glow" />

      <Eye
        size={16}
        className="footer-hint-icon"
        aria-hidden="true"
      />

      <span className="footer-hint-text">
        Click the eye icon to view and manage quest points
      </span>

      <button
        className="footer-hint-close"
        aria-label="Dismiss hint"
        onClick={() => setVisible(false)}
      >
        <X size={14} />
      </button>
    </div>
  );
}
