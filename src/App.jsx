import { useState } from "react";
import "./App.css";


function App() {
  // const [quiz, setQuiz] = useState(null);
  // const [selectedOption, setSelectedOption] = useState("");

  // const getQuestions = () => {
  //   axios({
  //     method: "GET",
  //     url: "http://localhost:8080/quiz/v1.0/getQuestions",
  //   }).then(function (response) {
  //     setQuiz(response.data);
  //     setSelectedOption("");
  //   });
  // };

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  // };

  // return (
  //   <div className="App">
  //     <h1>Quiz App</h1>
  //     <div className="card">
  //       <button onClick={getQuestions}>Fetch Quiz</button>
  //       {quiz && (
  //         <div className="quiz">
  //           <h2>{quiz.question}</h2>
  //           <div className="options">
  //             {["option1", "option2", "option3", "option4"].map(
  //               (key, index) => (
  //                 <div
  //                   key={index}
  //                   className={`option ${
  //                     selectedOption === quiz[key] ? "selected" : ""
  //                   }`}
  //                   onClick={() => handleOptionClick(quiz[key])}
  //                 >
  //                   <span className="option-label">
  //                     {String.fromCharCode(65 + index)}
  //                   </span>
  //                   {quiz[key]}
  //                 </div>
  //               )
  //             )}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1>QuizGrad</h1>
        <nav>
          <a href="#how-it-works">How it works?</a>
          <a href="#features">Features</a>
          <a href="#about-us">About us</a>
        </nav>
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

      <main className="quiz-content">
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

      <footer className="quiz-footer">
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


export default App;
