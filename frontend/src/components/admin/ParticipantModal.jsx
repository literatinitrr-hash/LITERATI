import { X, Trophy } from "lucide-react";
import QuestSection from "./QuestSection";
import "./admin.css";

export default function ParticipantModal({
  participant,
  onClose,
  onUpdate,
}) {
  if (!participant) return null;

  const { id, name, questPoints } = participant;

  const total =
    [...questPoints.mainQuests, ...questPoints.sideQuests].reduce(
      (a, b) => a + b,
      0
    );

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose} />

      <div className="participant-modal">
        <div className="modal-header">
          <div className="modal-title-block">
            <Trophy />
            <h3>{name}</h3>
          </div>
          <button onClick={onClose}>
            <X />
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
