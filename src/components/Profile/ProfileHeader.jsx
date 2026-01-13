import React from "react";
import "./ProfileHeader.css";

const ProfileHeader = ({ user }) => {
  if (!user) return null;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0].toUpperCase())
      .join("");
  };

  return (
    <div className="profile-header">
      <div className="profile-header-content">
        <div className="avatar-section">
          <div className="avatar-container">
            <div className="avatar-placeholder">
              {getInitials(user.name)}
            </div>
            <div className="avatar-glow"></div>
          </div>
        </div>

        <div className="user-details">
          <h1 className="user-name">{user.name}</h1>
          <p className="user-id">{user.email}</p>

          <div className="user-info">
            <span className="info-item">
              Role: {user.role}
            </span>
          </div>
        </div>

        <div className="score-section">
          <div className="total-score-label">Total Score</div>
          <div className="total-score-value">
            {user.totalPoints.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;