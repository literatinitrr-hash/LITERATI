import React, {
  useEffect,
  useState,
  useMemo
} from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import Header from "../components/HallOfFame/HeaderMinimal";
import "../components/HallOfFame/HallOfFame.css";

import heroBg from "../assets/literatiBg.png";

const images = import.meta.glob(
  "../assets/images/seniors/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default"
  }
);

const resolveImage = (filename) => {
  const key = `../assets/images/seniors/${filename}`;
  return images[key];
};

const hofData = [
  {
    id: 1,
    name: "Name",
    role: "Role",
    category: "Category",
    batch: "Year",
    achievement:
      "Achievement description goes here, highlighting the inductee's contributions and impact on the literary community.",
    image: "sampleimg.jpg"
  },

 {
    id: 2,
    name: "Name",
    role: "Role",
    category: "Category",
    batch: "Year",
    achievement:
      "Achievement description goes here, highlighting the inductee's contributions and impact on the literary community.",
    image: "sampleimg.jpg"
  },

 {
    id: 3,
    name: "Name",
    role: "Role",
    category: "Category",
    batch: "Year",
    achievement:
      "Achievement description goes here, highlighting the inductee's contributions and impact on the literary community.",
    image: "sampleimg.jpg"
  },

 {
    id: 4,
    name: "Name",
    role: "Role",
    category: "Category",
    batch: "Year",
    achievement:
      "Achievement description goes here, highlighting the inductee's contributions and impact on the literary community.",
    image: "sampleimg.jpg"
  },

 {
    id: 5,
    name: "Name",
    role: "Role",
    category: "Category",
    batch: "Year",
    achievement:
      "Achievement description goes here, highlighting the inductee's contributions and impact on the literary community.",
    image: "sampleimg.jpg"
  },
];

const categories = [
  "All",
  "Year x",
  "Year y",
  "Year z" 
];

const HallOfFame = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === hofData.length - 1
          ? 0
          : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  const activePerson = hofData[activeIndex];

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredData = useMemo(() => {

    if (selectedCategory === "All") {
      return hofData;
    }

    return hofData.filter(
      (person) =>
        person.category === selectedCategory
    );

  }, [selectedCategory]);

  return (
    <>
      <Header />

      <section
        className="hof-hero"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >

        <div className="hof-overlay"></div>

        <div className="hof-laurel left"></div>
        <div className="hof-laurel right"></div>

        <div className="hof-hero-content">

          <h1>Hall Of Fame</h1>

          <div className="hof-title-line"></div>

          <h3>
            Celebrating Literary Excellence | NIT Raipur
          </h3>

          <p className="hof-hero-desc">
            Honoring the words, ideas, and leaders
            who shaped the literary legacy of LitFest.
          </p>

          <AnimatePresence mode="wait">

            <motion.div
              key={activePerson.id}
              className="hof-featured-card"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >

              <div className="hof-featured-left">

                <div className="hof-featured-img-wrapper">

                  <div className="hof-featured-ring"></div>

                  <img
                    src={resolveImage(activePerson.image)}
                    alt={activePerson.name}
                  />

                  <div className="hof-badge">
                    HALL OF FAME
                  </div>

                </div>

              </div>

              <div className="hof-featured-right">

                <p className="featured-year">
                  {activePerson.batch} INDUCTEE
                </p>

                <h2>{activePerson.name}</h2>

                <h4>{activePerson.role}</h4>

                <p className="featured-quote">
                  "{activePerson.achievement}"
                </p>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>

      <section className="hof-stats-section">

        <div className="hof-stats-container">

          <div className="hof-stat-box">
            <h2>25+</h2>
            <p>Inductees</p>
          </div>

          <div className="hof-stat-box">
            <h2>10+</h2>
            <p>Categories</p>
          </div>

          <div className="hof-stat-box">
            <h2>15+</h2>
            <p>Years of Legacy</p>
          </div>

          <div className="hof-stat-box">
            <h2>1</h2>
            <p>Proud Institution</p>
          </div>

        </div>

      </section>

      <section className="hof-filter-section">

        <div className="hof-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      <section className="hof-grid-section">

        <div className="hof-grid">

          {filteredData.map((person) => (

            <motion.div
              layout
              key={person.id}
              className="hof-card"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <div className="hof-card-image">

                <img
                  src={resolveImage(person.image)}
                  alt={person.name}
                />

                <div className="hof-card-overlay">

                  <span>{person.batch}</span>

                  <p>{person.category}</p>

                </div>

                <div className="hof-corner-badge">
                  ★
                </div>

              </div>

              <div className="hof-card-content">

                <h2>{person.name}</h2>

                <div className="hof-small-divider"></div>

                <p>{person.achievement}</p>

              </div>

            </motion.div>

          ))}

        </div>

        {filteredData.length === 0 && (

          <p className="hof-empty">
            No inductees found.
          </p>

        )}

      </section>

      <footer className="hof-footer">

        <h2>
          “A legacy written in words,
          remembered for generations.”
        </h2>

      </footer>

    </>
  );
};

export default HallOfFame;