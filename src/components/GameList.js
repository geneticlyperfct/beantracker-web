import React from 'react';

function GameList({ games = [] }) {
  if (!games.length) {
    return <p>No games available.</p>;
  }

  return (
    <ul>
      {games.map((game, index) => (
        <li key={index}>
          <strong>{game.date}</strong> - {game.opponent} at {game.location} ({game.score})
        </li>
      ))}
    </ul>
  );
}

export default GameList;