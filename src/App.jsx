import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Feed from "./Feed/Feed";
import Forum from "./Forum/Forum";
import Quiz from "./Quiz/Quiz";
import Navbar from "./Navbar/Navbar";
import Login from "./auth/Login/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="feed" element={<Feed />} />
            <Route path="forum" element={<Forum />} />
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
