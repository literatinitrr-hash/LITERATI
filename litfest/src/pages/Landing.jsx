import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Events from "../components/Events/Events";
import Speakers from "../components/Speakers/Speakers";
import Sponsors from "../components/Sponsors/Sponsors";
import Gallery from "../components/Gallery/Gallery";
import Timeline from "../components/Timeline/Timeline";
import Stats from "../components/Stats/Stats";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

const Landing = ({onRegisterClick}) => {
  return (
    <div className="landing-container">
      <Header onRegisterClick={onRegisterClick} />
      <Hero />
      <About />
      <Events />
      <Speakers />
      <Sponsors />
      <Gallery />
      <Timeline />
      <Stats />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Landing;