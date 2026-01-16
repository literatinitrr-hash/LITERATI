import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

import ProfileHeader from "../components/Profile/ProfileHeader";
import "../styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const API = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/");
          return;
        }

        const res = await axios.get(`${API}/api/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        localStorage.removeItem("token");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <div className="profile-loading">Loading profile...</div>;
  }

  if (!user) {
    return <div className="profile-error">No user data</div>;
  }

  const availableEvents = [
    {
      id: 1,
      title: "Knowledge Trivia",
      description:
        "A fast-paced quiz testing literary awareness, pop culture, and quick thinking.",
    },
    {
      id: 2,
      title: "Wit & Expression – The Pensieve Pitch",
      description:
        "Present your ideas with clarity, confidence, and impact in a speech-based round.",
    },
    {
      id: 3,
      title: "Creativity – Once Upon a Time",
      description:
        "Craft an original story inspired by your favorite novel in your own unique style.",
    },
  ];


  return (
    <div className="app-container">
      <div className="profile-top">
        <div className="profile-left">
          <FaUserCircle className="profile-icon" />
          <h1>YOUR PROFILE</h1>
        </div>

        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>

      <main className="profile-content">
        <ProfileHeader user={user} />

        <div className="bottom-grid">
          <section className="event-score-list">
            <h3 className="event-score-title">Event Scores</h3>

            {user.eventScores.length === 0 ? (
              <p className="event-empty">
                No events participated yet
              </p>
            ) : (
              <div className="event-score-grid">
                {user.eventScores.map((e) => (
                  <div key={e.eventCode} className="event-score-item">
                    <span className="event-code">{e.eventCode}</span>
                    <span className="event-points">{e.points}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
          <h3 className="apply-title">Apply to Events</h3>

          <div className="apply-grid">
            {availableEvents.map((event) => (
              <div
                key={event.id}
                className="apply-card"
                onClick={() => setSelectedEvent(event)}
              >
                {event.title}
              </div>
            ))}
          </div>

        </div>
      </main>
      {selectedEvent && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>

            <button className="register-btn">
              Click here to register in this
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;