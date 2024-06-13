import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Discussion from "./discussion";
import Login from "./login";
import LandingPage from "./LandingPage";
import Landing from "./tsiory/pages/Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
