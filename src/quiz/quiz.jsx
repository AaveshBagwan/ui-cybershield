import "./Quiz.css";
import { useState } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="quiz-container min-h-screen justify-between flex flex-col">
      <header className="quiz-header">
        <h1>QuizGrad</h1>
        <span className="user-profile">Tarun ▼</span>
      </header>

      <div className="progress-bar">
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className={`step ${currentQuestion >= step ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <main className="quiz-content mb-auto">
        <h2>
          An interface design application that runs in the browser with
          team-based collaborative design projects
        </h2>
        <div className="options">
          <button className="option">FIGMA</button>
          <button className="option">ADOBE XD</button>
          <button className="option">INVISION</button>
          <button className="option">SKETCH</button>
        </div>
      </main>

      <footer className="quiz-footer ">
        <button className="prev">Previous</button>
        <div className="timer">60</div>
        <button className="next" onClick={handleNext}>
          Next
        </button>
        <button className="skip">Skip</button>
      </footer>
    </div>
  );
}

export default Quiz;
