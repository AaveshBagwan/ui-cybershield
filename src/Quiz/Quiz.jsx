import { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTime, setTotalTime] = useState(600);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionsData, setQuestionsData] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const sampleApiResponse = {
      "testId": "Long",
      "questionList": [
        {
          "questionId": 1,
          "question": "What is the capital of France?",
          "options": [
            { "optionId": 1, "option": "London" },
            { "optionId": 2, "option": "Paris" },
            { "optionId": 3, "option": "Berlin" },
            { "optionId": 4, "option": "Madrid" }
          ]
        },
        {
          "questionId": 2,
          "question": "Who painted the Mona Lisa?",
          "options": [
            { "optionId": 1, "option": "Michelangelo" },
            { "optionId": 2, "option": "Vincent van Gogh" },
            { "optionId": 3, "option": "Leonardo da Vinci" },
            { "optionId": 4, "option": "Pablo Picasso" }
          ]
        },
        {
          "questionId": 3,
          "question": "What is the largest planet in our solar system?",
          "options": [
            { "optionId": 1, "option": "Earth" },
            { "optionId": 2, "option": "Mars" },
            { "optionId": 3, "option": "Jupiter" },
            { "optionId": 4, "option": "Saturn" }
          ]
        },
        {
          "questionId": 4,
          "question": "What is the chemical symbol for gold?",
          "options": [
            { "optionId": 1, "option": "Ag" },
            { "optionId": 2, "option": "Au" },
            { "optionId": 3, "option": "Fe" },
            { "optionId": 4, "option": "Cu" }
          ]
        },
        {
          "questionId": 5,
          "question": "Who wrote the play 'Hamlet'?",
          "options": [
            { "optionId": 1, "option": "Charles Dickens" },
            { "optionId": 2, "option": "William Shakespeare" },
            { "optionId": 3, "option": "Jane Austen" },
            { "optionId": 4, "option": "Mark Twain" }
          ]
        },
        {
          "questionId": 6,
          "question": "What is the tallest mammal on Earth?",
          "options": [
            { "optionId": 1, "option": "Giraffe" },
            { "optionId": 2, "option": "Elephant" },
            { "optionId": 3, "option": "Horse" },
            { "optionId": 4, "option": "Kangaroo" }
          ]
        },
        {
          "questionId": 7,
          "question": "In which year did World War II end?",
          "options": [
            { "optionId": 1, "option": "1940" },
            { "optionId": 2, "option": "1942" },
            { "optionId": 3, "option": "1945" },
            { "optionId": 4, "option": "1948" }
          ]
        },
        {
          "questionId": 8,
          "question": "What is the largest ocean on Earth?",
          "options": [
            { "optionId": 1, "option": "Atlantic Ocean" },
            { "optionId": 2, "option": "Indian Ocean" },
            { "optionId": 3, "option": "Arctic Ocean" },
            { "optionId": 4, "option": "Pacific Ocean" }
          ]
        },
        {
          "questionId": 9,
          "question": "Who invented the light bulb?",
          "options": [
            { "optionId": 1, "option": "Thomas Edison" },
            { "optionId": 2, "option": "Nikola Tesla" },
            { "optionId": 3, "option": "Albert Einstein" },
            { "optionId": 4, "option": "Alexander Graham Bell" }
          ]
        },
        {
          "questionId": 10,
          "question": "How many bones are in the human body?",
          "options": [
            { "optionId": 1, "option": "206" },
            { "optionId": 2, "option": "205" },
            { "optionId": 3, "option": "208" },
            { "optionId": 4, "option": "105" },
          ] 
        } 
      ]
    };
    setQuestionsData(sampleApiResponse.questionList);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (totalTime > 0) {
        setTotalTime(prev => prev - 1);
      } else {
        // Disable everything when the timer expires
        console.log('Time expired! Disabling all functionality.');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [totalTime]);

  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1 && selectedAnswer) { 
      setAnsweredQuestions([...answeredQuestions, currentQuestion]);
      setUserAnswers([...userAnswers, { qid: questionsData[currentQuestion].questionId, selectedOptionId: selectedAnswer.optionId }]); 
      setSelectedAnswer(null);
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setSelectedAnswer(null);
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questionsData.length - 1) {
      setSkippedQuestions([...skippedQuestions, currentQuestion]);
      setSelectedAnswer(null);
      setCurrentQuestion(prev => prev + 1);
    }
  };
  const handleSubmit = () => {
    // Prepare payload for submitTest API
    const payload = {
      "userId": "Long", 
      "testId": "Long", 
      "questionsAnswersList": userAnswers
    };

    // Send payload to submitTest API
    console.log("Submitting payload:", payload); 
  };

  const handleOptionClick = (option) => {
    // Prevent option selection if the question has already been answered
    if (answeredQuestions.includes(currentQuestion)) {
      return;
    }
    setSelectedAnswer(option);
  };
  return (
    <div className="quiz-container">
       <div className="progress-bar">
        {questionsData.map((_, index) => (
          <div
            key={index}
            className={`step ${
              currentQuestion === index 
                ? 'current' 
                : answeredQuestions.includes(index) 
                  ? 'answered' 
                  : skippedQuestions.includes(index) 
                    ? 'skipped' 
                    : ''
            }`}
          />
        ))}
      </div>

      <div className="quiz-content">
        <div className="quiz-question">
          {questionsData[currentQuestion]?.question || 'Loading...'}
        </div>

        <div className="options-container">
          {questionsData[currentQuestion]?.options?.map((option) => (
            <button
              key={option.optionId}
              onClick={() => handleOptionClick(option)}
              className={`option ${selectedAnswer?.optionId === option.optionId ? 'selected' : ''}`}
              disabled={totalTime === 0 || (answeredQuestions.includes(currentQuestion))} 
            >
              {option.option}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-footer">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0 || totalTime === 0}
          className="button previous"
        >
          Previous
        </button>

        <div className="timer">
          {`${Math.floor(totalTime / 60).toString().padStart(2, '0')}:${(totalTime % 60).toString().padStart(2, '0')}`}
        </div>

        <div className="button-group">
          {currentQuestion === questionsData.length - 1 ? ( 
            <button onClick={handleSubmit} className="button submit">
              Submit
            </button>
          ) : (
            <>
              <button 
                onClick={handleNext} 
                className="button next" 
                disabled={!selectedAnswer || totalTime === 0}
              >
                Next
              </button>
              <button onClick={handleSkip} className="button skip" disabled={totalTime === 0}>
                Skip
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;