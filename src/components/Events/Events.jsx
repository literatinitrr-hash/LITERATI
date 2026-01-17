import React, { useState } from "react";
import "./Events.css";
import { Mic, BookOpen, PenTool, Earth, Drum, X, Sparkles } from "lucide-react";

const eventsData = [
  {
    name: "Knowledge Trivia",
    desc: "An adventure of facts and surprises awaits. Test your literary awareness, pop-culture knowledge, and quick thinking in this fast-paced challenge.",
    icon: <BookOpen size={36} strokeWidth={1.8} />
  },
  {
    name: "Wit & Expression – The Pensieve Pitch:",
    desc: "Inspired by the Pensieve, this round challenges you to present ideas with clarity, confidence, and impact.",
    icon: <Mic size={36} strokeWidth={1.8} />
  },
  {
    name: "Creativity – Once Upon a Time…",
    desc: "Craft the story of your favourite novel in your own unique style. This round tests imagination, originality, and narrative flow, where creativity becomes your strongest spell.",
    icon: <PenTool size={36} strokeWidth={1.8} />
  },
  {
    name: "Finale Event – Aircrash",
    desc: "The ultimate showdown awaits. Finalists enter a high-stakes roleplay where literary characters collide. Every decision and dialogue counts toward victory.",
    icon: <Drum size={36} strokeWidth={1.8} />
  },
  {
    name: "Model United Nations (One-Day Event)",
    desc: "Welcome to the most formal clearing of the jungle. Inspired by the Council Rock from The Jungle Book, this MUN challenges delegates to debate global issues with diplomacy, discipline, and precision, where words hold true power.",
    icon: <Earth size={36} strokeWidth={1.8} />
  }
];

const funQuestsData = [
  { title: "Jenga", desc: "A game of strategy and steady hands. Carefully pick your block and place it on top to build the tower, or watch it crash down." },
  { title: "Chess", desc: "Step into the tall grass for a game of strategy, a breathtaking struggle for dominance in the animal kingdom. The checkmate is not just a win, it is claiming your territory in the wild." },
  { title: "Snake 'N Ladders", desc: "Navigate the jungle, you might find a hidden trail to the top or a slithering surprise that sends you back to the start." },
  { title: "Scrabble", desc: "Here every letter is a footprint and every word is a discovery. In this jungle, the loudest roar does not win, the sharpest vocabulary does." },
  { title: "Movie Eve", desc: "Lights, camera, relaxation. Unwind with friends and films under one cozy roof." },
  { title: "Chair Race", desc: "Tired of exploring the jungle? Take a seat, if you can. Hear the sound of the drums and react fast to claim the throne of the jungle." },
  { title: "Dumb Charades", desc: "Gestures, giggles, and wild guesses. The ultimate party game." },
  { title: "HANGMAN", desc: "Only your vocabulary can rescue the man hanging on the rope bridge before it collapses. Guess the word correctly and avoid the wet splashdown." },
];

const sideQuestsData = [
  { title: "Essay Writing", desc: "A focused literary quest where ideas flow with depth and structure. Participants explore themes thoughtfully, crafting essays that reflect clarity, originality, and perspective." },
  { title: "The Literary Marathon", desc: "" },
  { title: "Debate (Rebuttal)", desc: "A battlefield of words where logic meets confidence. Defend your stance and counter opponents with sharp rebuttals in this intellectually charged contest." },
  { title: "Quiz", desc: "A fast-paced challenge testing accuracy, speed, and presence of mind. From literature to pop culture, every question keeps you on your toes." },
  { title: "Literary Scavenger Hunt / Scavenger Hunt", desc: "Adventure awaits at every turn. Solve puzzles, chase clues, and claim the prize." },
  { title: "The Murder Mystery", desc: "Who is the culprit? Only your detective skills can crack the case." },
];

const Events = () => {
  const [activeQuestType, setActiveQuestType] = useState(null);
  const popupData = activeQuestType === 'side' ? sideQuestsData : funQuestsData;
  const popupTitle = activeQuestType === 'side' ? "Side Quests" : "Fun Quests & Activities";

  return (
    <section id="events" className="events">
      <div className="floating-particles"></div>

      <div className="events-content">
        <h2 className="events-title">
          Events
          <span className="underline"></span>
        </h2>

        <div className="event-grid">
          {eventsData.map((event, index) => (
            <div key={index} className="event-card tilt">
              <div className="glow"></div>
              <div className="event-icon floating">{event.icon}</div>
              <h3>{event.name}</h3>
              <p>{event.desc}</p>
            </div>
          ))}
        </div>

        <div className="quests-container">
          <div className="event-card side-quest-tab" onClick={() => setActiveQuestType('side')}>
             <div className="glow"></div>
             <div className="event-icon floating"><Sparkles size={36} strokeWidth={1.8} /></div>
             <h3>Side Quests</h3>
             <p>Click to see more</p>
          </div>

          <div className="event-card fun-quest-tab" onClick={() => setActiveQuestType('fun')}>
             <div className="glow"></div>
             <div className="event-icon floating"><Sparkles size={36} strokeWidth={1.8} /></div>
             <h3>Fun Quests</h3>
             <p>Click to see more</p>
          </div>
        </div>
      </div>

      {activeQuestType && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close-btn" onClick={() => setActiveQuestType(null)}>
              <X size={28} />
            </button>
            <h2 className="popup-title">{popupTitle}</h2>
            <div className="popup-grid">
              {popupData.map((quest, index) => (
                <div key={index} className="popup-item">
                  <h3>{quest.title}</h3>
                  <p>{quest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;