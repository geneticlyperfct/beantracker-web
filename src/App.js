import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddGame from './pages/AddGame';
import './styles.css';

function App() {
  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Game</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/add" element={<AddGame addGame={addGame} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;