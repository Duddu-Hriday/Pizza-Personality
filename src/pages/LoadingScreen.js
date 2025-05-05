import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingScreen.css"; // create this for styles

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/questions/1");
    }, 3000); // 3 seconds "preheat"

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <h1>🔥 Preheating your pizza personality…</h1>
      <p>Get ready for a slice of self-discovery!</p>
      <div className="oven-loader"></div>
    </div>
  );
};

export default LoadingScreen;
