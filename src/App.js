import React, { useState } from 'react';
import GameList from './components/GameList';
import AddGameForm from './components/AddGameForm';
import './styles.css';

const App = () => {
  // Sample initial state; you can later replace this with data from a backend or localStorage.
  const [games, setGames] = useState([
    { date: '2024-04-04', opponent: 'Team A', location: 'Stadium 1', score: '3-2' },
    { date: '2024-04-05', opponent: 'Team B', location: 'Stadium 2', score: '2-1' }
  ]);

  // Function to add a new game
  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="App">
      <header>
        <h1>BeanTracker: Game Attendance</h1>
      </header>
      <AddGameForm onAddGame={addGame} />
      <GameList games={games} />
    </div>
  );
};

export default App;