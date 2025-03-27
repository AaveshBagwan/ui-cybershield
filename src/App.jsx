import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Feed from "./Feed/Feed";
import Forum from "./Forum/Forum";
import Quiz from "./Quiz/Quiz";
import Navbar from "./Navbar/Navbar";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import "./App.css";
import Results from "./QuizResult/Result";
import ProtectedRoute from "./utils/ProtectedRoute";
import ViewTest from "./ViewTest/viewTest";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="top-padding" style={{"padding-top": "70px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="feed" element={<Feed />} />
            <Route path="forum" element={<Forum />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route
              path="/results"
              element={
                <ProtectedRoute>
                  <Results />
                </ProtectedRoute>
              }
            />
            <Route path="viewtest" element={<ViewTest />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
