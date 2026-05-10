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
  const [events, setEvents] = useState([])
  const [registering, setRegistering] = useState(false)

  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const LIT_API = import.meta.env.VITE_LIT_API_URL;
      const res = await axios.get(`${LIT_API}/api/events`);
      setEvents(res.data.events); 
    } catch (err) {
      console.log("Failed to fetch events", err);
    }
  };

  fetchEvents();
}, []);


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

  const handleRegister = async () => {
  try {
    setRegistering(true);
    const token = localStorage.getItem("token");

    await axios.post(
      `${LIT_API}/api/events/${selectedEvent.code}/interest`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Registered successfully!");
    setSelectedEvent(null);
  } catch (err) {
    alert(err.response?.data?.message || "Registration Failed!");
  } finally {
    setRegistering(false);
  }
};



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
            {events.length === 0 ? (
              <p>No events available</p>
            ) : (
              events.map((event) => (
              <div
              key={event.code}
              className="apply-card"
              onClick={() => setSelectedEvent(event)}
              >
                {event.name}
                </div>
                ))
                )}
          </div>

        </div>
      </main>
      {selectedEvent && (
      <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>{selectedEvent.name}</h2>
        <p>Event Code: {selectedEvent.code}</p>


      <button
        className="register-btn-2"
        onClick={handleRegister}
        disabled={registering}
      >
        {registering ? "Registering..." : "Register"}
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Profile;