import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Translate from './pages/Translate';
import RandomString from './pages/RandomString';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/random" element={<RandomString />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
