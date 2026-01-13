import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import JungleHeader from "../components/admin/JungleHeader";
import ScoreboardCard from "../components/admin/ScoreboardCard";
import ScoreboardHeader from "../components/admin/ScoreboardHeader";
import SearchBar from "../components/admin/SearchBar";
import ParticipantList from "../components/admin/ParticipantList";
import ParticipantRow from "../components/admin/ParticipantRow";
import FooterHint from "../components/admin/FooterHint";
import ParticipantModal from "../components/admin/ParticipantModal";

function Admin() {
  const [search, setSearch] = useState("");
  const [selectedParticipantId, setSelectedParticipantId] = useState(null);
  const [participants, setParticipants] = useState([]);

  const fetchParticipants = async () => {
    try {
      const API = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API}/api/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setParticipants(res.data.users);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  const visibleParticipants = useMemo(() => {
    return participants
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => b.totalPoints - a.totalPoints);
  }, [participants, search]);

  const selectedParticipant = participants.find(
    (p) => p._id === selectedParticipantId
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
              key={p._id}
              rank={index + 1}
              name={p.name}
              points={p.totalPoints}
              isTop={index === 0}
              onView={() => setSelectedParticipantId(p._id)}
            />
          ))}
        </ParticipantList>

        <FooterHint />
      </ScoreboardCard>

      {selectedParticipant && (
        <ParticipantModal
          participant={selectedParticipant}
          onClose={() => setSelectedParticipantId(null)}
          onRefresh={fetchParticipants}
        />
      )}
    </div>
  );
}

export default Admin;
