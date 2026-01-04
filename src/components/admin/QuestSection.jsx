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
  if (!Array.isArray(quests)) return null;

  const subtotal = quests.reduce((a, b) => a + b, 0);

  return (
    <section
      className="quest-section"
      role="region"
      aria-labelledby={`${type}-title`}
    >
      <h4 id={`${type}-title`} className="quest-section-title">
        {title}
      </h4>

      {quests.length === 0 ? (
        <div className="quest-empty">
          No quests available
        </div>
      ) : (
        quests.map((points, index) => (
          <QuestRow
            key={`${type}-${index}`}
            label={`${title.replace(/s$/, "")} ${index + 1}`}
            points={points}
            onIncrement={() =>
              onUpdate(participantId, type, index, 10)
            }
            onDecrement={() =>
              onUpdate(participantId, type, index, -10)
            }
          />
        ))
      )}

      <SubtotalRow points={subtotal} />
    </section>
  );
}
