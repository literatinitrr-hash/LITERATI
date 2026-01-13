import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ScoreBreakdown from '../components/Profile/ScoreBreakdown';
import QuestOverview from '../components/Profile/QuestOverview';
import ScoreHistory from '../components/Profile/ScoreHistory';
import Leaderboard from '../components/Profile/Leaderboard';
import '../styles/Profile.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCrown, FaUserCircle } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="app-container">
      {/* Main Content */}
      <div className="profile-top">
        <div className='profile-left'>
          <FaUserCircle className='profile-icon' />
          <h1>YOUR PROFILE</h1>
        </div>
        <button
          className="logout-button"
          onClick={() => navigate("/")}
        >
          Log Out
        </button>
      </div>
      <main className="profile-content">
        <ProfileHeader />
        {/* <ScoreBreakdown /> */}
        {/* <QuestOverview /> */}

        <div className="bottom-grid">
          {/* <ScoreHistory /> */}
          {/* <Leaderboard /> */}
        </div>
      </main>
    </div>

  );
}

export default Profile