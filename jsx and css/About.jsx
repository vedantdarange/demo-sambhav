import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import vis from "../Assets/vis.jpg";
import bg from "../Assets/bg.png";

const About = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main About Section */}
      <main id="about" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
          {/* Header */}
          <header className="about-header">
            <h1 className="about-title">About</h1>
            <div className="sambhav">SAMBHAV 3.0</div>
          </header>

          {/* Vision and Mission */}
          <section className="cards">
            <article className="card card--cyan">
              <h3 className="card-title cyan">The Vision</h3>
              <p>
                To become a pioneering platform that redefines the future of
                technology and innovation by uniting diverse minds, inspiring
                transformative ideas, and fostering meaningful connections.
                Sambhav 3.0 envisions a seamless collaboration between academia
                and industry, paving the way for sustainable progress and
                technological leadership.
              </p>
            </article>

            <article className="card card--orange">
              <h3 className="card-title orange">The Mission</h3>
              <p>
                To establish a vibrant and inclusive platform that drives
                innovation, fosters collaboration, and inspires creativity.
                Sambhav 3.0 bridges the gap between academia and industry
                through hands-on workshops, interactive sessions, and showcases
                of cutting-edge technologies. Our mission is to empower
                participants to unlock their full potential and prepare them to
                lead in a rapidly evolving technological world.
              </p>
            </article>
          </section>

          {/* Inspiration Section */}
          <section className="inspo" aria-label="Our Inspiration">
            <h4 className="heading">OUR INSPIRATION</h4>
            <div className="inspo-inner">
              <div className="inspo-left">
                <div className="inspo-photo">
                  <img src={vis} alt="Sir M. Visvesvaraya" />
                </div>
                <div className="inspo-name">M. Visvesvaraya</div>
              </div>

              <div className="inspo-divider" aria-hidden="true"></div>

              <div className="inspo-text">
                <p className="inspo-quote">
                  "Sambhav 3.0 draws inspiration from Sir M. Visvesvaraya,
                  India's legendary engineer and statesman, whose vision,
                  discipline, and dedication laid the foundation for
                  technological progress. His legacy continues to inspire
                  generations of engineers."
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
