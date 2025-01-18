import { useState, useEffect } from 'react';
import './Quiz.css';
import { endpoints, handleApiError } from '../config'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTime, setTotalTime] = useState(600);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionsData, setQuestionsData] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [, setError] = useState(null);
  const [isLoading,  setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(isLoading); 
        const req = {
          userId: 2,  // will use to set the actual userId from the logged in user
          testId: 3, // have to set a logic to determine this as well (based on the user login)
        };
        const response = await endpoints.quiz.getTest(req);
        setQuestionsData(response.data.responseData.questionList);
      } catch (error) {
        setError(handleApiError(error));
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchQuestions();
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return; 

    const timer = setInterval(() => {
      if (totalTime > 0) {
        setTotalTime(prev => prev - 1);
      } else {
        // Disable everything when the timer expires
        console.log('Time expired! Disabling all functionality.');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [totalTime, isLoading]);

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