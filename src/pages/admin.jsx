import { useMemo, useState } from "react";
import JungleHeader from "../components/admin/JungleHeader";
import ScoreboardCard from "../components/admin/ScoreboardCard";
import ScoreboardHeader from "../components/admin/ScoreboardHeader";
import SearchBar from "../components/admin/SearchBar";
import ParticipantList from "../components/admin/ParticipantList";
import ParticipantRow from "../components/admin/ParticipantRow";
import FooterHint from "../components/admin/FooterHint";
import ParticipantModal from "../components/admin/ParticipantModal";
//import "C:\Users\OMEN\Downloads\New folder (2)\LITERATI\src\components\admin\admin.css";

export default function Admin() {
  const [search, setSearch] = useState("");
  const [selectedParticipantId, setSelectedParticipantId] = useState(null);

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

  // 🔢 total calculator (stable)
  const calculateTotalPoints = (p) =>
    [...p.questPoints.mainQuests, ...p.questPoints.sideQuests].reduce(
      (sum, val) => sum + val,
      0
    );

  // 🧠 mutation logic (safe + immutable)
  const updateQuestPoints = (id, type, index, delta) => {
    setParticipants((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        if (!p.questPoints[type]) return p;

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

  // 🧠 derived + sorted view
  const visibleParticipants = useMemo(() => {
    return participants
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((p) => ({
        ...p,
        total: calculateTotalPoints(p),
      }))
      .sort((a, b) => b.total - a.total);
  }, [participants, search]);

  // 🔗 synced modal participant
  const selectedParticipant = participants.find(
    (p) => p.id === selectedParticipantId
  );

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
              onView={() => setSelectedParticipantId(p.id)}
            />
          ))}
        </ParticipantList>

        <FooterHint />
      </ScoreboardCard>

      {selectedParticipant && (
        <ParticipantModal
          participant={selectedParticipant}
          onClose={() => setSelectedParticipantId(null)}
          onUpdate={updateQuestPoints}
        />
      )}
    </div>
  );
}
