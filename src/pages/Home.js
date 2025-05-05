import React, { useState, useEffect } from "react";
import "./Page.css";
import pizzaImage from "./assets/pizza.png"; // or your mascot image path
import { useNavigate } from "react-router-dom";

const taglines = [
  "You can't make everyone happy. You're not pizza.",
  "Slice, slice baby!",
  "Extra cheese, extra chaos.",
  "Trust in crust.",
  "Keep calm and eat pizza.",
];

function Home() {
  const navigate = useNavigate();
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  const handleExploreClick = () => {
    navigate("/loading");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <span className="logo-icon">🍕</span>
        <span className="logo-text">Slice of you</span>
      </div>
      <div className="main-content">
        <div className="left-section">
          <div className="title">
            What’s Your <span className="bold">Inner</span>{" "}
            <span className="highlight">Pizza Personality?</span>
          </div>
          <div className="cta-circle" onClick={handleExploreClick}>
  <span className="cta-text">Explore Here</span>
  <span className="click-icon">👉</span>
</div>

          <div className="tagline rotating-text">🍕 {taglines[currentTaglineIndex]}</div>
        </div>
        <div className="right-section">
          <img src={pizzaImage} alt="Pizza Mascot" className="pizza-img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
