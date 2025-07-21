import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <img src={place.image} alt={place.name} style={{ width: '100%' }} />
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <p><strong>Views:</strong> {place.views}</p>
      <p><strong>Distance:</strong> {place.distance} km</p>
      <p><strong>Date:</strong> {new Date(place.date).toLocaleDateString()}</p>
    </div>
  );
}

export default ReadMore;
