import { useMemo, useState } from "react";
import JungleHeader from "./components/JungleHeader";
import ScoreboardCard from "./components/ScoreboardCard";
import ScoreboardHeader from "./components/ScoreboardHeader";
import SearchBar from "./components/SearchBar";
import ParticipantList from "./components/ParticipantList";
import ParticipantRow from "./components/ParticipantRow";
import FooterHint from "./components/FooterHint";
import ParticipantModal from "./components/ParticipantModal";
import "./admin.css";

export default function Admin() {
  const [search, setSearch] = useState("");
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const [participants, setParticipants] = useState([
    {
      id: "1",
      name: "Arjun Kumar",
      questPoints: {
        mainQuests: [120, 150, 80],
        sideQuests: [30, 25, 20, 25],
      },
    },
    {
      id: "2",
      name: "Priya Sharma",
      questPoints: {
        mainQuests: [100, 120, 90],
        sideQuests: [20, 15, 20, 15],
      },
    },
    {
      id: "3",
      name: "Rohan Patel",
      questPoints: {
        mainQuests: [150, 140, 130],
        sideQuests: [30, 30, 25, 20],
      },
    },
  ]);

  // 🔢 total calculator
  const calculateTotalPoints = (p) =>
    [...p.questPoints.mainQuests, ...p.questPoints.sideQuests].reduce(
      (a, b) => a + b,
      0
    );

  // 🧠 core mutation logic
  const updateQuestPoints = (id, type, index, delta) => {
    setParticipants((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;

        const updated = [...p.questPoints[type]];
        updated[index] = Math.max(0, updated[index] + delta);

        return {
          ...p,
          questPoints: {
            ...p.questPoints,
            [type]: updated,
          },
        };
      })
    );
  };

  const visibleParticipants = useMemo(() => {
    return participants
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((p) => ({ ...p, total: calculateTotalPoints(p) }))
      .sort((a, b) => b.total - a.total);
  }, [participants, search]);

  return (
    <div className="admin-page">
      <JungleHeader />

      <ScoreboardCard>
        <ScoreboardHeader />
        <SearchBar value={search} onChange={setSearch} />

        <ParticipantList>
          {visibleParticipants.map((p, index) => (
            <ParticipantRow
              key={p.id}
              rank={index + 1}
              name={p.name}
              points={p.total}
              isTop={index === 0}
              onView={() => setSelectedParticipant(p)}
            />
          ))}
        </ParticipantList>

        <FooterHint />
      </ScoreboardCard>

      {selectedParticipant && (
        <ParticipantModal
          participant={selectedParticipant}
          onClose={() => setSelectedParticipant(null)}
          onUpdate={updateQuestPoints}
        />
      )}
    </div>
  );
}
