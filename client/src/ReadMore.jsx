// ReadMore.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ReadMore.css';

function ReadMore() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/travel/${id}`)
      .then(res => res.json())
      .then(data => setPlace(data))
      .catch(err => console.error('Error loading place:', err));
  }, [id]);

  if (!place) return <p>Loading...</p>;

  return (
    <div className="readmore-container">
      <img src={place.image} alt={place.name} className="readmore-image" />
      <h2>{place.name}</h2>
      <p className="description">{place.description}</p>
      <div className="details">
        <p><strong>Views:</strong> {place.views}</p>
        <p><strong>Distance:</strong> {place.distance} km</p>
        <p><strong>Date:</strong> {new Date(place.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default ReadMore;
