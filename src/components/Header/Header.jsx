import React, { useState } from "react";
import "./Header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import PublicLeaderboard from "../Dashboard/PublicLB";

const Header = () => {
  const navigate = useNavigate();
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleEvents = (e) => {
    e.preventDefault();
    setIsEventsOpen(!isEventsOpen);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="Litfest 2026" />
        </Link>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#events" 
          onClick={(e) => {
            setMenuOpen(false);
            setTimeout(() => {
              
              toggleEvents(e); 
            }, 10);
          }}>
            Events
            </a>   
          <a href="#speakers" onClick={() => setMenuOpen(false)}>Speakers</a>
          <a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
          <a href="#sponsors" onClick={() => setMenuOpen(false)}>Our Sponsors</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Our Team</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <Link to="/adminlogin" onClick={() => setMenuOpen(false)}>
          Enter As Admin
          </Link>
          <a 
          className="register-btn"
          onClick={() => {
            navigate("/register");
            setMenuOpen(false);
          }}
          >
            Register
          </a>     
        </nav>

        <button className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        
      </header>
      {isEventsOpen && (
        <div className="modal-overlay" onClick={() => setIsEventsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h1>Lit-Fest 2026 Events</h1>
              <button className="modal-close" onClick={() => setIsEventsOpen(false)}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h2>Intro to Lit-Fest</h2>
                <p>
                  Be ready to hear the echoes of Tarzan as you are about to enter the world of jungle adventure!
                  The wait is finally over, as we are all set to host our first-ever Lit-Fest. Let’s dive right into it.
                  This jungle-themed adventure has an assortment of entertainment awaiting you in the den.
                  The most exciting part is the literary Triwizard Tournament, where you get to witness a whole new “Literary Hogwarts” amidst the jungle adventure.
                  As the name suggests, you will have to compete in three rounds along with a grand finale event.
                  Apart from the main event, there are multiple side quests and fun events, and even the side quests are equally important as they help you earn points too.
                  The one with the highest cumulative points at the end of the fest will be declared the winner of the Lit-Fest and will be awarded the Triwizard Cup( a.k.a. a special prize).
                  See you in the jungle!
                </p>
              </div>

              <div className="modal-section">
                <h2>The Triwizard Tournament</h2>
                <p>
                  A warm and magical welcome to everyone! We welcome you all to the legendary Triwizard Tournament.
                  Keep your broomsticks and magical wands ready, as we all set to dive into a delightful literary Triwizard Tournament.
                  Steady yourself to live your dream in this 'literary' Hogwarts!
                </p>

                <div className="table-container">
                  <table className="events-table">
                    <thead>
                      <tr>
                        <th>Quests</th>
                        <th>Event Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Main Quest 1</td>
                        <td><strong>Poetry Slam</strong></td>
                        <td>
                        </td>
                      </tr>

                      <tr>
                        <td>Main Quest 2</td>
                        <td><strong>Storyforge Championship</strong></td>
                        <td>
                        </td>
                      </tr>

                      <tr>
                        <td>Main Quest 3</td>
                        <td><strong>Tube Trolls 5.0</strong></td>
                        <td>
                        </td>
                      </tr>

                      <tr>
                        <td>Grand Final</td>
                        <td><strong>Air-Crash</strong></td>
                        <td>
                          <p>Welcome to the final and most intense challenge of the Triwizard journey. Air-Crash is where the jungle witnesses the ultimate test of intellect and expression. In this round, the top scorers transform into iconic literary characters trapped aboard a failing flight, where only a limited few can be saved.</p>
                          <p>Each participant must stay completely in character and make a compelling case for why their character deserves survival. Persuasion, emotional depth, logical reasoning, and strong expression become the key tools in this battle of words. With every argument and decision, the stakes grow higher. Air-Crash brings together knowledge, wit, and creativity into one decisive challenge, making it the perfect finale where only the most convincing voice rises above the chaos.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="modal-section">
                <h2>Side Quests</h2>
                <p>
                  Our college is buzzing with excitement as the grand LitFest unfolds. Beyond the thrilling main quests, the side quests promise a world of creativity and fun; whether it’s weaving words in essay writing, pouring emotions into poems, rest your trivia prowess in pulse-pounding quizzes, wander the enchanting book fair stalls laden with literary treasures, belt out soul-stirring English songs, clash wits in fiery debates, weave magical tales through creative writing, while sharp minds chase clues in the literary scavenger hunt, the suspenseful murder mystery, or the laughter-filled dumb charades. ‘Tis but a vibrant carnival of intellect, imagination, and unbridled fun. An adventure where every quest tells a story.
                </p>
              </div>

              <div className="modal-section">
                <h2>Fun Quest</h2>
                <p>
                  This year's lit fest isn't just a word war. It's a jungle safari where every turn hides a new adventure. We've hidden a series of fun quests to test your wit, speed, steady hands, and even luck. So join us for a day of laughter and friendly rivalry. Remember, only the fittest survive in the jungle!
                </p>
                <p>
                  To survive in our jungle, only sharp claws won't help, but a sharp brain and steady hands will help you to survive the game of CHESS and JENGA. One wrong move and the whole canopy crashes down.
                </p>
                <p>
                  Save the day (and the man) in a game of HANGMAN. Piece together high-scoring words under pressure to outsmart your fellow explorers and win SCRABBLE. As you dive deep into the jungle, the shadows mimic the explorers, step into the DUMBCHARADES, where words are forbidden and only your movements can bridge the gap between hunter and prey.
                </p>
              </div>

              <div className="modal-section">
                <h2>MUN</h2>
                <p>
                  The Model United Nations is here! So, delegates, be ready for a unique literary twist this time, as Literati is set to organise MUN for the very first time. It’s a great opportunity to showcase how composed and professional you can be, whether it’s nailing a long speech as a monologue, humbling your opponents in a sharp debate, or offering thoughtful advice on important geopolitical decisions.
                </p>
                <p>
                  Welcome to the most formal part of our entire Jungle Adventure; the ‘Pack Council’ at Council Rock serves as a perfect reference for it, symbolising discipline, dialogue, and decisive leadership. And you know what the best part is? It is going to be a part of Lit-Fest 2026 itself, making it an essential stop in this grand literary journey.
                </p>
                <p>
                  So, those participating in the Triwizard need to keep their magical wands aside this time and let their monologues, diplomacy, and debating skills do the magic. While you enjoy the literary voyage, you can also be a part of something truly intellectual and formal. The rules are as standard (and repetitive, too) as a typical MUN rulebook would demand.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
