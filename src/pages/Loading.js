import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result");
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="oven">
        <div className="oven-door" />
        <div className="pizza" />
      </div>
      <p>Baking your pizza personality... 🍕🔥</p>
    </div>
  );
};

export default Loading;
