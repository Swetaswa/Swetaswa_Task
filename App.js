import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    // Fetch data from the API
    // You can use fetch or axios
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <div className="app">
      <div className="controls">
        <label>
          Group By:
          <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>

        <label>
          Sort By:
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>

      <Board tickets={tickets} groupBy={groupBy} sortOption={sortOption} />
    </div>
  );
}

export default App;
