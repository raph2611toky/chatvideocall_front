import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Discussion from './discussion';
import Login from './login';
import Appel from './appel';
import LandingPage from './LandingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/discussion" element={<Discussion/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;