import React from 'react';
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import './ScoreHistory.css';

const ScoreHistory = () => {
  const history = [
    // Main Quests (Total 7,615)
    { quest: 'The Ancient Manuscript', type: 'Main Quest', score: 2_500, timestamp: '2026-01-15 14:30' },
    { quest: 'Guardian of Tales', type: 'Main Quest', score: 2_900, timestamp: '2026-01-14 15:00' },
    { quest: 'Epic Journey', type: 'Main Quest', score: 2_215, timestamp: '2026-01-13 10:00' },

    // Side Quests (Total 4,569)
    { quest: 'Poetry Workshop', type: 'Side Quest', score: 1_200, timestamp: '2026-01-15 10:00' },
    { quest: 'Author Meet & Greet', type: 'Side Quest', score: 1_500, timestamp: '2026-01-14 11:30' },
    { quest: 'Book Club Discussion', type: 'Side Quest', score: 1_869, timestamp: '2026-01-13 09:00' },

    // Fun Quests (Total 3,046)
    { quest: 'Trivia Challenge', type: 'Fun Quest', score: 800, timestamp: '2026-01-15 09:00' },
    { quest: 'Photo Scavenger Hunt', type: 'Fun Quest', score: 900, timestamp: '2026-01-14 08:00' },
    { quest: 'Costume Contest', type: 'Fun Quest', score: 846, timestamp: '2026-01-13 12:00' },

    // Penalty
    { quest: 'Late Submission Penalty', type: 'Penalty', score: -100, timestamp: '2026-01-12 23:59' },
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'Main Quest': return '#10b981';
      case 'Side Quest': return '#14b8a6';
      case 'Fun Quest': return '#22c55e';
      case 'Penalty': return '#ef4444';
      default: return '#81c784';
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="score-history">
      <h2 className="section-title">Score History</h2>
      <div className="history-container">
        <div className="history-list">
          {history.map((entry, index) => (
            <div key={index} className="history-item">
              <div className="history-icon">
                {entry.score > 0 ? (
                  <TrendingUp size={18} className="icon-positive" />
                ) : (
                  <TrendingDown size={18} className="icon-negative" />
                )}
              </div>
              
              <div className="history-details">
                <div className="history-quest">{entry.quest}</div>
                <div className="history-meta">
                  <span 
                    className="history-type"
                    style={{ color: getTypeColor(entry.type) }}
                  >
                    {entry.type}
                  </span>
                  <span className="history-separator">•</span>
                  <span className="history-time">
                    <Calendar size={12} />
                    {formatDate(entry.timestamp)}
                  </span>
                </div>
              </div>

              <div className={`history-score ${entry.score > 0 ? 'positive' : 'negative'}`}>
                {entry.score > 0 ? '+' : ''}{entry.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreHistory;
