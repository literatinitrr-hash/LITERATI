import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ScoreBreakdown from '../components/Profile/ScoreBreakdown';
import QuestOverview from '../components/Profile/QuestOverview';
import ScoreHistory from '../components/Profile/ScoreHistory';
import Leaderboard from '../components/Profile/Leaderboard';
import '../styles/Profile.css';
import { FaCrown, FaUserCircle } from "react-icons/fa";
const Profile = () => {
  return (
    <div className = "app-container">
      {/* Main Content */}
      <div className="leaderboard-header">
        <FaUserCircle className='profile-icon' />
              <h1>YOUR PROFILE</h1>
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