import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";   // ⬅️ Added for routing
import "./Landingpage.css";
import background from "../Assets/bg.png";
import mainLogo from "../Assets/logo.png";
import loaderVideo from "../Assets/loadingvideo.mp4";

export default function Landingpage() {
  const videoRef = useRef(null);
  const [showMain, setShowMain] = useState(false);
  const navigate = useNavigate();   // ⬅️ Added for navigation

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("loaderPlayed");

    if (hasPlayed) {
      setShowMain(true); // ✅ Skip loader
    } else {
      const video = videoRef.current;
      if (video) {
        video.play();
        video.onended = () => {
          setShowMain(true);
          sessionStorage.setItem("loaderPlayed", "true"); // ✅ Mark as played
        };
      }
    }
  }, []);

  const skipVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowMain(true);
    sessionStorage.setItem("loaderPlayed", "true"); // ✅ Mark as played
  };

  return (
    <>
      {/* Loader Screen */}
      {!showMain && (
        <div id="loader">
          <video ref={videoRef} autoPlay muted playsInline>
            <source src={loaderVideo} type="video/mp4" />
          </video>
          <button id="skip-btn" onClick={skipVideo}>
            Skip
          </button>
        </div>
      )}

      {/* Main Content */}
      <div
        id="main-content"
        style={{
          opacity: showMain ? 1 : 0,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="content">
          <img src={mainLogo} alt="Main Logo" className="main-logo" />
          <div className="overlay-text">
            <h1 className="tagline">CREATING FUTURE ENDEAVOURS</h1>
            <p className="date">15-16 SEPTEMBER 2025</p>
            <button
              className="cta-btn"
              onClick={() => navigate("/events")}   // ⬅️ Navigate to Events page
            >
              EXPLORE OUR EVENTS
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
