import { useParams, useNavigate } from "react-router-dom";
import questions from "./questionsData";
import "./Questions.css";
import { useState } from "react";

const Questions = () => {
  const { id } = useParams();
  const questionIndex = parseInt(id) - 1;
  const navigate = useNavigate();
  const [answers] = useState(() =>
    JSON.parse(localStorage.getItem("pizzaAnswers") || "[]")
  );

  const handleOptionClick = (type) => {
    const newAnswers = [...answers, type];
    localStorage.setItem("pizzaAnswers", JSON.stringify(newAnswers));
    if (questionIndex + 1 < questions.length) {
      navigate(`/questions/${questionIndex + 2}`);
    } else {
      navigate("/loadingscreen");
    }
  };

  if (!questions[questionIndex]) {
    return <div className="question-container">Invalid question!</div>;
  }

  const question = questions[questionIndex];

  return (
    <div className="question-container">
      <h2>Question {questionIndex + 1}</h2>
      <p className="question-text">{question.question}</p>
      <div className="options-container">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option.type)}
            className="option-button"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
