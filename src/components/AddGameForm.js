import React, { useState } from 'react';

const AddGameForm = ({ onAddGame }) => {
  const [formData, setFormData] = useState({
    date: '',
    opponent: '',
    location: '',
    score: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGame(formData);
    setFormData({ date: '', opponent: '', location: '', score: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="opponent"
        placeholder="Opponent"
        value={formData.opponent}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="score"
        placeholder="Score"
        value={formData.score}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Game</button>
    </form>
  );
};

export default AddGameForm;