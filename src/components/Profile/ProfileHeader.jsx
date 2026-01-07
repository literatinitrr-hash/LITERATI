import React from 'react';
import './ProfileHeader.css';


const ProfileHeader = () => {
  const userData = {
    name: 'Riya Sharma',
    userId: 'RS2025-1472',
    college: 'Indian Institute of Technology, Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    totalScore: 15230,
    rank: 'Topper',
    avatar: null // Will use generated avatar
  };

  // Generate avatar initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('');
  };

  return (
    <div className="profile-header">
      <div className="profile-header-content">
        <div className="avatar-section">
          <div className="avatar-container">
            {userData.avatar ? (
              <img src={userData.avatar} alt={userData.name} className="avatar-image" />
            ) : (
              <div className="avatar-placeholder">
                {getInitials(userData.name)}
              </div>
            )}
            <div className="avatar-glow"></div>
          </div>
        </div>

        <div className="user-details">
          <h1 className="user-name">{userData.name}</h1>
          <p className="user-id">ID: {userData.userId}</p>
          <div className="user-info">
            <span className="info-item">{userData.college}</span>
            <span className="info-separator">•</span>
            <span className="info-item">{userData.city}, {userData.state}</span>
          </div>
          {/* <div className="rank-badge">{userData.rank}</div> */}
        </div>

        <div className="score-section">
          <div className="total-score-label">Total Score</div>
          <div className="total-score-value">{userData.totalScore.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
