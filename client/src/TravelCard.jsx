// TravelCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelCard.css';

function TravelCard({ place }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/place/${place._id}`);
  };

  return (
    <div className="travel-card" onClick={handleClick}>
      <img src={place.image} alt={place.name} className="travel-image" />
      <h3>{place.name}</h3>
      <p>{place.description.slice(0, 100)}...</p>
      <button className="read-more-btn">Read More</button>
    </div>
  );
}

export default TravelCard;
