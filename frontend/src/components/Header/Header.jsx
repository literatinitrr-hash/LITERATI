import React, { useState } from "react";
import "./Header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

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
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#events" onClick={(e) => {toggleEvents(e); setMenuOpen(false);}}>
            Events
            </a>   
          <Link to="/adminlogin" onClick={() => setMenuOpen(false)}>
          Enter As Admin
          </Link>
          <a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
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
                  The challenge begins with an exciting trivia round that will test your literary knowledge like never before, hence we urge you to ready yourself to use the best knowledge potion you have.
                  The second challenge tests your wit and expression, and with what you ask?
                  Introducing the Pensieve Pitch, where you need to present your idea in the wittiest way possible.
                  You will surely need some serious wizarding skills to pull this off.
                  The third quest follows thereafter, where you must use your wands and spells in the most creative way possible, as this round tests your creativity in writing something truly engaging.
                  The top scorers will then qualify for our final round, Air-Crash, where all these qualities will be tested together.
                  Steady yourself to live your dream in this 'literary' Hogwarts!
                </p>

                <div className="table-container">
                  <table className="events-table">
                    <thead>
                      <tr>
                        <th>Round</th>
                        <th>Event Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Round 1</td>
                        <td><strong>Knowledge Trivia</strong></td>
                        <td>
                          <p>Do you have a "shelf" control problem? Put those hours of reading to good use! Join us for an evening of trivia, covering everything from science & sports to literature & history.</p>
                          <p>The Knowledge Trivia Challenge is not your average park stroll; it is a safari to test the limits of your mental stamina across the vast landscapes of Literature, Entertainment, History, Science, Geography, Sports, and Current Affairs.</p>
                          <p>The trek has 4 stages:</p>
                          <ul className="table-list">
                            <li><strong>1. RAPID FIRE:</strong> Welcome to the jungle sprint, where questions strike fast without warning like wild predators. Think quickly, answer quicker, and keep moving, or get lost in the thickets!</li>
                            <li><strong>2. CATEGORY ROUND:</strong> Choose your terrain wisely. Will you navigate the dense forests of History or dive into the deep waters of Literature? You pick the path; we provide the challenge.</li>
                            <li><strong>3. VISUAL AND AUDIO ROUND:</strong> Identify the hidden creatures and the distant echoes of the jungle in this immersive sensory round.</li>
                            <li><strong>4. BUZZER ROUND:</strong> The ultimate showdown, here speed is everything! Press the buzzer fastest to claim your spot at the top of the food chain!</li>
                          </ul>
                          <p>Do you have the grit to navigate the thickets of trivia and emerge as the King of the Jungle? Join us for an adventure of wits that is truly wild!</p>
                        </td>
                      </tr>

                      <tr>
                        <td>Round 2</td>
                        <td><strong>The Pensieve Pitch</strong></td>
                        <td>
                          <p>Where raw wit meets electric expression in a battle of minds, it dives into a shimmering Pensieve brimming with vivid memories and untold stories. It is a space where every word becomes a spark, every pause a canvas, and every thought a ripple across minds. Here, wit is not just cleverness but the ability to turn insight into impact, while expression is the rhythm that gives voice to imagination. The Pensive Pitch invites participants to dance between humor and depth, logic and lyricism, crafting performances that dazzle with brilliance and linger with resonance. It is a celebration of language as both sword and song, where the mind speaks, and the heart listens.</p>
                        </td>
                      </tr>

                      <tr>
                        <td>Round 3</td>
                        <td><strong>Creativity Quest</strong></td>
                        <td>
                          <p>Ever had a wish to see an alternative ending to your favourite novel? Imagine if you could change the tragic ending of Attack on Titan or prevent Romeo and Juliet from falling into a misunderstanding. Well, that is possible, for now at least. Stories have always lived beyond their pages, and every reader has dreamed of stepping into them and rewriting fate.</p>
                          <p>We present to you the third and most important adventure in our jungle-themed Triwizard journey, where you get a chance to showcase your creativity most imaginatively. This quest is not just about writing. It is about rethinking destinies and reshaping narratives. So, be ready with your broomsticks and magical wands to dive into the final jungle adventure, where you turn your fantasy into reality and complete the story of your favourite novels.</p>
                          <p>Don't worry, we will not ask you to write an entire book. Just complete the excerpt we provide, and remember to honour the original author by maintaining their tone and style. Now, it is time to dive in and let your imagination lead the way.</p>
                        </td>
                      </tr>

                      <tr>
                        <td>Final</td>
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
                  To survive in our jungle, only sharp claws won't help, but a sharp brain and steady hands will help you to survive the game of CHESS and JENGA. One wrong move and the whole canopy crashes down. In SNAKE N LADDER, navigate the forest floor. You might find a hidden trail to the top, or a slithering surprise to send you back to the start.
                </p>
                <p>
                  Tired of walking in the jungle?? Take a seat (if you can!) in our high-energy CHAIR RACE. In the heart of our literacy jungle, the words are evolving into pictures, so sharpen your pencils and clear your vision, your artistic instincts are the only map in the quest for PICTIONARY.
                </p>
                <p>
                  Save the day (and the man) in a game of HANGMAN. Piece together high-scoring words under pressure to outsmart your fellow explorers and win SCRABBLE. As you dive deep into the jungle, the shadows mimic the explorers, step into the MIRROR CHARADES, where words are forbidden and only your movements can bridge the gap between hunter and prey.
                </p>
                <p>
                  As the sun sets, retreat to our base camp for a cinematic escape. Grab some snacks and lose yourself in a story brought to life on the big screen. "It’s a jungle out there, bring your pens, your puns, and your predator instincts." Come for the games, stay for the glory!
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