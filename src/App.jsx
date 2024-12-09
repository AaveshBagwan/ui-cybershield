
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

}


export default App;
