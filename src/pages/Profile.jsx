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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const API = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/");
          return;
        }

        const res = await axios.get(`${API}/api/users/me`, {
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
        </div>
      </main>
    </div>
  );
};

export default Profile;