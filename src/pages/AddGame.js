import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddGame({ addGame }) {
  const leagueTeams = {
    MLB: 'Washington Nationals',
    NBA: 'Washington Wizards',
    "NCAA Men's Basketball": 'George Mason Patriots',
    "NCAA Women's Basketball": 'George Mason Patriots',
    NFL: 'Washington Commanders',
    NWSL: 'Washington Spirit',
    UFL: 'DC Defenders',
  };

  const getTodayDate = () => new Date().toLocaleDateString('en-CA'); // Format date as yyyy-MM-dd

  const [formData, setFormData] = useState({
    date: getTodayDate(), // Initialize with today's date
    opponent: '',
    location: '',
    teamScore: '', // Separate score for the team
    opponentScore: '', // Separate score for the opponent
    league: 'MISC', // Default league
    team: '', // Default team
    gameType: '', // Default game type
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setFormData((prev) => ({ ...prev, date: getTodayDate() })); // Ensure date is set on load
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-update the team field when the league changes
    if (name === 'league') {
      const team = leagueTeams[value] || ''; // Default to blank for MISC
      setFormData({ ...formData, league: value, team });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({ ...formData, date: date.toLocaleDateString('en-CA') }); // Format date as yyyy-MM-dd
  };

  const handleGameTypeChange = (type) => {
    setFormData({ ...formData, gameType: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame(formData);

    // Reset form fields to defaults, keeping the selected league
    setFormData({
      date: getTodayDate(),
      opponent: '',
      location: '',
      teamScore: '',
      opponentScore: '',
      league: formData.league, // Keep the current league
      team: leagueTeams[formData.league] || '', // Reset team based on league
      gameType: '',
    });
    setSelectedDate(new Date()); // Reset the date picker to today
  };

  return (
    <div className="add-game-container">
      <header>
        <h1>Add a New Game</h1>
      </header>
      <form onSubmit={handleSubmit} className="add-game-form">
        <label htmlFor="league">League:</label>
        <select
          id="league"
          name="league"
          value={formData.league}
          onChange={handleChange}
          className="form-select"
        >
          <option value="MISC">MISC</option>
          <option value="MLB">MLB</option>
          <option value="NBA">NBA</option>
          <option value="NCAA Men's Basketball">NCAA Men's Basketball</option>
          <option value="NCAA Women's Basketball">NCAA Women's Basketball</option>
          <option value="NFL">NFL</option>
          <option value="NWSL">NWSL</option>
          <option value="UFL">UFL</option>
        </select>

        <label htmlFor="date">Select Date:</label>
        <DatePicker
          id="date"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="form-datepicker"
        />

        <label htmlFor="team">Team:</label>
        <div className="team-score-container">
          {formData.league === 'MISC' ? (
            <input
              type="text"
              id="team"
              name="team"
              placeholder="Enter team name"
              value={formData.team}
              onChange={handleChange}
              className="form-input"
            />
          ) : (
            <input
              type="text"
              id="team"
              name="team"
              value={formData.team}
              readOnly
              className="form-input"
            />
          )}
          <input
            type="text"
            name="teamScore"
            placeholder="Score"
            value={formData.teamScore}
            onChange={handleChange}
            className="form-input score-input"
          />
        </div>

        <label htmlFor="opponent">Opponent:</label>
        <div className="opponent-score-container">
          <input
            type="text"
            name="opponent"
            placeholder="Opponent"
            value={formData.opponent}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="opponentScore"
            placeholder="Score"
            value={formData.opponentScore}
            onChange={handleChange}
            className="form-input score-input"
          />
        </div>

        <label>Game Type:</label>
        <div className="game-type-buttons">
          <button
            type="button"
            onClick={() => handleGameTypeChange('Home')}
            className={`game-type-button ${
              formData.gameType === 'Home' ? 'active' : ''
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleGameTypeChange('Away')}
            className={`game-type-button ${
              formData.gameType === 'Away' ? 'active' : ''
            }`}
          >
            Away
          </button>
          <button
            type="button"
            onClick={() => handleGameTypeChange('Neutral')}
            className={`game-type-button ${
              formData.gameType === 'Neutral' ? 'active' : ''
            }`}
          >
            Neutral
          </button>
        </div>

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-submit-button">Add Game</button>
      </form>
    </div>
  );
}

export default AddGame;
