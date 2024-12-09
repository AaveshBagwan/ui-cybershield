import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Feed from "./Feed/Feed";
import Forum from "./Forum/Forum";
import Quiz from "./quiz/quiz";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          {/* Adjust padding to prevent content overlap */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="feed" element={<Feed />} />
            <Route path="forum" element={<Forum />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
