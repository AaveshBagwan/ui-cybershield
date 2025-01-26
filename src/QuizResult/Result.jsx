import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    // Check both session storage and location state
    const hasValidAccess = sessionStorage.getItem("testSubmitted") === "true";

    if (!hasValidAccess || !location.state?.result) {
      navigate("/");
      return;
    }

    setResultData(location.state.result);

    // Cleanup function to remove the session storage when leaving results page
    return () => {
      sessionStorage.removeItem("testSubmitted");
    };
  }, [location, navigate]);

  const { score, Grade } = resultData;
  const isPassed = Grade?.toLowerCase() !== "fail";

  return (
    <div className="results-page">
      <div className="results-card">
        <div className="check-icon">
          <span className={`icon ${isPassed ? "pass" : "fail"}`}>
            {isPassed ? "✓" : "!"}
          </span>
        </div>
        <h1 className={`title ${isPassed ? "success-text" : "failure-text"}`}>
          {isPassed ? "Congratulations!" : "Not Quite There"}
        </h1>
        <p className="message">
          {isPassed
            ? "You've successfully passed the test! Well done on your achievement."
            : "Don't worry! Every attempt is a learning opportunity. Keep practicing and try again."}
        </p>

        <div className="results-details">
          <div className="result-row">
            <span className="label">Score:</span>
            <span className="value">{score}</span>
          </div>
          <div className="result-row">
            <span className="label">Grade:</span>
            <span
              className={`value ${isPassed ? "success-text" : "failure-text"}`}
            >
              {Grade}
            </span>
          </div>
        </div>

        <div className="button-container">
          <button onClick={() => navigate("/")} className="btn home-btn">
            Return to Home
          </button>
          <button
            onClick={() =>
              navigate("/view-test-result", { state: { resultData } })
            }
            className="btn result-btn"
          >
            View Test Result
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
