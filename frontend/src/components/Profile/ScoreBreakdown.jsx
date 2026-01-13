import React from 'react';
import { Scroll, Sword, Sparkles } from 'lucide-react';
import './ScoreBreakdown.css';

const ScoreBreakdown = () => {
  const scores = [
    {
      title: 'Main Quests',
      score: 7615,
      icon: Scroll,
      color: '#10b981' // green
    },
    {
      title: 'Side Quests',
      score: 4569,
      icon: Sword,
      color: '#14b8a6' // teal
    },
    {
      title: 'Fun Quests',
      score: 3046,
      icon: Sparkles,
      color: '#22c55e' // lime
    }
  ];

  return (
    <div className="score-breakdown">
      <h2 className="section-title">Score Breakdown</h2>
      <div className="score-cards">
        {scores.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index} 
              className="score-card"
              style={{ '--card-color': item.color }}
            >
              <div className="score-card-glow"></div>
              <div className="score-card-content">
                <div className="score-icon">
                  <IconComponent size={32} />
                </div>
                <div className="score-info">
                  <div className="score-title">{item.title}</div>
                  <div className="score-value">{item.score.toLocaleString()}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreBreakdown;
