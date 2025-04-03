import React from 'react';

function Home({ games }) {
  return (
    <div>
      <header>
        <h1>BeanTracker</h1>
      </header>
      <div>
        {games.length === 0 ? (
          <p>No games added yet.</p>
        ) : (
          games.map((game, index) => (
            <div key={index} className="game-item">
              <p><strong>Date:</strong> {game.date}</p>
              <p><strong>League:</strong> {game.league}</p>
              <p>
                <strong>Team:</strong> {game.team} - <strong>{game.teamScore}</strong>
              </p>
              <p>
                <strong>Opponent:</strong> {game.opponent} - <strong>{game.opponentScore}</strong>
              </p>
              <p><strong>Game Type:</strong> {game.gameType}</p>
              <p><strong>Location:</strong> {game.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
