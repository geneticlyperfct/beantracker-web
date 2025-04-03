import React from 'react';

const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <h3>{game.opponent}</h3>
      <p>Date: {game.date}</p>
      <p>Location: {game.location}</p>
      <p>Score: {game.score}</p>
    </div>
  );
};

export default GameItem;