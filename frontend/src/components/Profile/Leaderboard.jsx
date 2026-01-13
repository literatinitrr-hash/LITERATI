import React, { useState, useRef, useEffect } from 'react';
import { Search, Trophy, Medal, Award } from 'lucide-react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolledPastCurrentUser, setScrolledPastCurrentUser] = useState(false);
  const scrollContainerRef = useRef(null);
  const currentUserRowRef = useRef(null);
  
  const currentUserId = 'IN2026-4721';
  const currentUserRank = 12;

  const leaderboardData = [
  { rank: 1, name: 'Aarav Mehta', userId: 'IN2026-1001', college: 'IIT Bombay', score: 17_500 },
  { rank: 2, name: 'Ananya Sharma', userId: 'IN2026-1002', college: 'IIT Delhi', score: 16_800 },
  { rank: 3, name: 'Vivaan Kapoor', userId: 'IN2026-1003', college: 'IIT Kanpur', score: 16_200 },
  { rank: 4, name: 'Saanvi Reddy', userId: 'IN2026-1004', college: 'IIT Madras', score: 16_000 },
  { rank: 5, name: 'Arjun Patel', userId: 'IN2026-1005', college: 'BITS Pilani', score: 15_900 },
  { rank: 6, name: 'Ishita Singh', userId: 'IN2026-1006', college: 'IISc Bangalore', score: 15_700 },
  { rank: 7, name: 'Kabir Nair', userId: 'IN2026-1007', college: 'IIT Hyderabad', score: 15_500 },
  { rank: 8, name: 'Diya Jain', userId: 'IN2026-1008', college: 'VIT Vellore', score: 15_400 },
  { rank: 9, name: 'Rohan Verma', userId: 'IN2026-1009', college: 'IIT Guwahati', score: 15_350 },
  { rank: 10, name: 'Meera Iyer', userId: 'IN2026-1010', college: 'BITS Pilani', score: 15_300 },
  { rank: 11, name: 'Aditya Khanna', userId: 'IN2026-1011', college: 'IIT Roorkee', score: 15_250 },
  { rank: 12, name: 'Riya Sharma', userId: 'IN2026-4721', college: 'IIT Delhi', score: 15_230 }, // current user
  { rank: 13, name: 'Devansh Choudhary', userId: 'IN2026-1013', college: 'IIT BHU', score: 15_100 },
  { rank: 14, name: 'Siddhi Desai', userId: 'IN2026-1014', college: 'IIT Indore', score: 14_900 },
  { rank: 15, name: 'Aryan Singh', userId: 'IN2026-1015', college: 'NIT Trichy', score: 14_700 },
  { rank: 16, name: 'Tanya Ghosh', userId: 'IN2026-1016', college: 'IIT Patna', score: 14_500 },
  { rank: 17, name: 'Neil Sharma', userId: 'IN2026-1017', college: 'NIT Surathkal', score: 14_200 },
  { rank: 18, name: 'Anika Rao', userId: 'IN2026-1018', college: 'IIT Dhanbad', score: 13_900 },
  { rank: 19, name: 'Kabir Malhotra', userId: 'IN2026-1019', college: 'IIT Jodhpur', score: 13_500 },
  { rank: 20, name: 'Prisha Kapoor', userId: 'IN2026-1020', college: 'NIT Warangal', score: 13_200 }
];


  const topThree = leaderboardData.slice(0, 3);
  const restOfLeaderboard = leaderboardData.slice(3);

  const filteredLeaderboard = restOfLeaderboard.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && currentUserRowRef.current) {
        const containerRect = scrollContainerRef.current.getBoundingClientRect();
        const userRowRect = currentUserRowRef.current.getBoundingClientRect();
        
        // Check if user's actual row is visible in viewport
        const isUserRowVisible = userRowRect.top >= containerRect.top && 
                                   userRowRect.bottom <= containerRect.bottom;
        
        setScrolledPastCurrentUser(!isUserRowVisible);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1:
        return <Trophy size={24} />;
      case 2:
        return <Medal size={24} />;
      case 3:
        return <Award size={24} />;
      default:
        return null;
    }
  };

  const getRankColor = (rank) => {
    switch(rank) {
      case 1:
        return '#ffd700'; // Gold
      case 2:
        return '#c0c0c0'; // Silver
      case 3:
        return '#cd7f32'; // Bronze
      default:
        return '#10b981';
    }
  };

  const currentUser = leaderboardData.find(user => user.userId === currentUserId);

  return (
    <div className="leaderboard">
      <h2 className="section-title">Leaderboard</h2>
      
      {/* Search */}
      <div className="search-container">
        <Search size={20} className="search-icon" />
        <input 
          type="text"
          placeholder="Search by name or User ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Top 3 Podium */}
      <div className="podium">
        <div className="podium-card podium-second">
          <div className="podium-rank" style={{ color: getRankColor(2) }}>
            {getRankIcon(2)}
            <span>#2</span>
          </div>
          <div className="podium-avatar">{topThree[1].name.split(' ').map(w => w[0]).join('')}</div>
          <div className="podium-name">{topThree[1].name}</div>
          <div className="podium-score">{topThree[1].score.toLocaleString()}</div>
        </div>

        <div className="podium-card podium-first">
          <div className="podium-rank" style={{ color: getRankColor(1) }}>
            {getRankIcon(1)}
            <span>#1</span>
          </div>
          <div className="podium-avatar">{topThree[0].name.split(' ').map(w => w[0]).join('')}</div>
          <div className="podium-name">{topThree[0].name}</div>
          <div className="podium-score">{topThree[0].score.toLocaleString()}</div>
        </div>

        <div className="podium-card podium-third">
          <div className="podium-rank" style={{ color: getRankColor(3) }}>
            {getRankIcon(3)}
            <span>#3</span>
          </div>
          <div className="podium-avatar">{topThree[2].name.split(' ').map(w => w[0]).join('')}</div>
          <div className="podium-name">{topThree[2].name}</div>
          <div className="podium-score">{topThree[2].score.toLocaleString()}</div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="leaderboard-table-container" ref={scrollContainerRef}>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>College</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaderboard.map((user) => (
              <tr 
                key={user.userId}
                className={user.userId === currentUserId ? 'current-user-row' : ''}
                ref={user.userId === currentUserId ? currentUserRowRef : null}
              >
                <td className="rank-cell">#{user.rank}</td>
                <td className="name-cell">
                  {user.name}
                  {user.userId === currentUserId && <span className="you-badge">You</span>}
                </td>
                <td className="college-cell">{user.college}</td>
                <td className="score-cell">{user.score.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sticky Current User Row */}
      {currentUser && scrolledPastCurrentUser && (
        <div className="sticky-current-user">
          <div className="sticky-rank">#{currentUser.rank}</div>
          <div className="sticky-name">
            {currentUser.name}
            <span className="you-badge">You</span>
          </div>
          <div className="sticky-college">{currentUser.college}</div>
          <div className="sticky-score">{currentUser.score.toLocaleString()}</div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
