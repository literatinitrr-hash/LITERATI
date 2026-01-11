import { X, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import QuestSection from "./QuestSection";
import "./admin.css";

export default function ParticipantModal({
  participant,
  onClose,
  onUpdate,
}) {
  const modalRef = useRef(null);

  if (!participant) return null;

  const { id, name, questPoints } = participant;

  const total = [
    ...questPoints.mainQuests,
    ...questPoints.sideQuests,
  ].reduce((a, b) => a + b, 0);

  // ESC key close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="participant-modal-title"
    >
      <div className="modal-backdrop" onClick={onClose} />

      <div
        className="participant-modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-block">
            <Trophy size={18} />
            <h3 id="participant-modal-title">{name}</h3>
          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="total-points-card">
          <span>Total Points</span>
          <strong>{total}</strong>
        </div>

        <QuestSection
          title="Main Quests"
          type="mainQuests"
          quests={questPoints.mainQuests}
          participantId={id}
          onUpdate={onUpdate}
        />

        <QuestSection
          title="Side Quests"
          type="sideQuests"
          quests={questPoints.sideQuests}
          participantId={id}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
}
