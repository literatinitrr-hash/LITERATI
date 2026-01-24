import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";


import ProfileHeader from "../components/Profile/ProfileHeader";
import "../styles/Profile.css";

const Profile = () => {
  const API = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [availableEvents, setAvailableEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registering, setRegistering] = useState(false);
  const [showThanks, setShowThanks] = useState(false);


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

  useEffect(() => {
    const fetchEvents = async (retry = false) => {
      try {
        const res = await axios.get(`${API}/api/events`);

        if (res.data.success) {
          setAvailableEvents(res.data.events);
        }
      } catch (err) {
        if (!retry) {
          setTimeout(() => fetchEvents(true), 1000);
        } else {
          console.error("Failed to fetch events after retry", err);
        }
      }
    };

    fetchEvents();
  }, []);


  const registerInterest = async () => {
    if (!selectedEvent) return;

    try {
      setRegistering(true);
      const API = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem("token");

      await axios.post(
        `${API}/api/events/${selectedEvent.code}/interest`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSelectedEvent(null);
      setShowThanks(true);
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Failed to register interest"
      );
    } finally {
      setRegistering(false);
    }
  };


  if (loading) {
    return <div className="profile-loading">Loading profile...</div>;
  }

  if (!user) {
    return <div className="profile-error">No user data</div>;
  }

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
                key={event.code}
                className="apply-card"
                onClick={() => setSelectedEvent(event)}
              >
                <h4>{event.name}</h4>
                <span className="event-code">{event.code}</span>
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
            <h2>{selectedEvent.name}</h2>

            <button
              className="register-btn-2"
              onClick={registerInterest}
              disabled={registering}
            >
              {registering ? "Registering..." : "Click here to register"}
            </button>
          </div>
        </div>
      )}
      {showThanks && (
        <div
          className="modal-overlay"
          onClick={() => setShowThanks(false)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>🎉 Registration Successful</h2>
            <p>
              Thanks for registering!
              You’ll be contacted with further details soon.
            </p>

            <button
              className="register-btn-2"
              onClick={() => setShowThanks(false)}
            >
              Awesome!
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;