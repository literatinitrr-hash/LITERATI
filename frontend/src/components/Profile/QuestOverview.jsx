import React from 'react';
import { Lock, CheckCircle2, Circle } from 'lucide-react';
import './QuestOverview.css';

const QuestOverview = () => {
  const mainQuests = [
    { name: 'The Ancient Manuscript', status: 'completed', progress: 100 },
    { name: 'Guardian of Tales', status: 'ongoing', progress: 65 },
    { name: 'Keeper of Secrets', status: 'locked', progress: 0 }
  ];

  const sideQuests = [
    { name: 'Poetry Workshop', status: 'completed', progress: 100 },
    { name: 'Author Meet & Greet', status: 'completed', progress: 100 },
    { name: 'Book Club Discussion', status: 'ongoing', progress: 40 },
    { name: 'Creative Writing', status: 'locked', progress: 0 }
  ];

  const funQuests = [
    { name: 'Trivia Challenge', status: 'completed', progress: 100 },
    { name: 'Photo Scavenger Hunt', status: 'completed', progress: 100 },
    { name: 'Costume Contest', status: 'ongoing', progress: 50 },
    { name: 'Story Telling Circle', status: 'ongoing', progress: 30 },
    { name: 'Bookmark Design', status: 'locked', progress: 0 }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <CheckCircle2 size={20} />;
      case 'ongoing':
        return <Circle size={20} />;
      case 'locked':
        return <Lock size={20} />;
      default:
        return <Circle size={20} />;
    }
  };

  const renderQuestList = (quests, title, count) => (
    <div className="quest-category">
      <div className="quest-category-header">
        <h3 className="quest-category-title">{title}</h3>
        <span className="quest-count">{count}</span>
      </div>
      <div className="quest-list">
        {quests.map((quest, index) => (
          <div key={index} className={`quest-item quest-${quest.status}`}>
            <div className="quest-header">
              <div className="quest-status-icon">
                {getStatusIcon(quest.status)}
              </div>
              <div className="quest-name">{quest.name}</div>
            </div>
            <div className="quest-progress-bar">
              <div 
                className="quest-progress-fill" 
                style={{ width: `${quest.progress}%` }}
              ></div>
            </div>
            <div className="quest-progress-text">{quest.progress}%</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="quest-overview">
      <h2 className="section-title">Quest Log</h2>
      <div className="quest-categories">
        {renderQuestList(mainQuests, 'Main Quests', 3)}
        {renderQuestList(sideQuests, 'Side Quests', 4)}
        {renderQuestList(funQuests, 'Fun Quests', funQuests.length)}
      </div>
    </div>
  );
};

export default QuestOverview;
