import React, { useState, useEffect } from 'react';
import TravelCard from './TravelCard';
import './TravelPlaces.css';

const dummyPlaces = [
  {
    id: 1,
    name: 'Ella Rock',
    description: 'Beautiful hike in Sri Lanka',
    views: 100,
    distance: 5,
    date: '2023-07-10',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
{
  id: 2,
  name: 'Sigiriya',
  description: 'Iconic ancient rock fortress in Sri Lanka',
  views: 300,
  distance: 18,
  date: '2023-07-18',
  image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1721277162374-NZH5HA2ZCKXVMIQN8ZRU/The_Common_Wanderer_-33-2.jpg?format=1000w'
},

  {
  id: 3,
  name: 'Nuwara Eliya',
  description: 'Cool climate and tea plantations',
  views: 150,
  distance: 10,
  date: '2023-07-12',
  image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1550227945246-Y6QA4SZZKM8VWC7ITX6N/The_Common_Wanderer_best_things_to_do_Sri_Lanka-29.jpg'
},

  {
  id: 4,
  name: 'Anuradhapura',
  description: 'Ancient city with sacred ruins',
  views: 150,
  distance: 10,
  date: '2023-07-12',
  image: 'https://passportnomads.com/wp-content/uploads/2020/03/20200310_120928-scaled.jpg'
},
  {
    id: 5,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
  {
    id: 6,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
  {
    id: 7,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
  {
    id: 8,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  }
];



function TravelPlaces() {
  const [places, setPlaces] = useState(dummyPlaces);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let filtered = dummyPlaces;

    // Apply search
    if (search) {
      filtered = filtered.filter(place =>
        place.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply filter
    if (filter === 'most-viewed') {
      filtered = [...filtered].sort((a, b) => b.views - a.views);
    } else if (filter === 'nearby') {
      filtered = [...filtered].sort((a, b) => a.distance - b.distance);
    } else if (filter === 'latest') {
      filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setPlaces(filtered);
  }, [search, filter]);

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
        {places.map((place) => (
          <TravelCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}

export default TravelPlaces;
