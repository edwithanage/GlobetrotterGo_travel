import React from 'react';
import './TravelPlaces.css';

function TravelCard({ place }) {
  return (
    <div className="travel-card">
      <img src={place.image} alt={place.name} />
      <h3>{place.name}</h3>
      <p>{place.description}</p>
    </div>
  );
}

export default TravelCard;
