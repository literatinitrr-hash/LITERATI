import QuestRow from "./QuestRow";
import SubtotalRow from "./SubtotalRow";
import "./admin.css";

export default function QuestSection({
  title,
  type,
  quests,
  participantId,
  onUpdate,
}) {
  const subtotal = quests.reduce((a, b) => a + b, 0);

  return (
    <section className="quest-section">
      <h4>{title}</h4>

      {quests.map((points, index) => (
        <QuestRow
          key={index}
          label={`${title.slice(0, -1)} ${index + 1}`}
          points={points}
          onIncrement={() =>
            onUpdate(participantId, type, index, +10)
          }
          onDecrement={() =>
            onUpdate(participantId, type, index, -10)
          }
        />
      ))}

      <SubtotalRow points={subtotal} />
    </section>
  );
}
