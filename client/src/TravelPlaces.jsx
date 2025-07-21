import React, { useState, useEffect } from 'react';
import TravelCard from './TravelCard';
import './TravelPlaces.css';

function TravelPlaces() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/travel')
      .then(res => res.json())
      .then(data => setPlaces(data))
      .catch(err => console.error('Failed to load travel places:', err));
  }, []);

  const filteredPlaces = places
    .filter(place =>
      place.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === 'most-viewed') return b.views - a.views;
      if (filter === 'nearby') return a.distance - b.distance;
      if (filter === 'latest') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="travel-container">
      <h2>Explore Travel Places</h2>

      <input
        type="text"
        placeholder="Search travel places..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="filter-buttons">
        <button onClick={() => setFilter('most-viewed')}>Most Viewed</button>
        <button onClick={() => setFilter('nearby')}>Nearby</button>
        <button onClick={() => setFilter('latest')}>Latest</button>
      </div>

      <div className="card-grid">
        {filteredPlaces.map((place) => (
          <TravelCard key={place._id} place={place} />
        ))}
      </div>
    </div>
  );
}

export default TravelPlaces;
