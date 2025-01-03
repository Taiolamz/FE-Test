import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
