import { Link } from 'react-router-dom';
import './TravelCard.css'; // Make sure you import your card styles

function TravelCard({ place }) {
  return (
    <Link to={`/readmore/${place._id}`} className="travel-card-link">
      <div className="travel-card">
        <img src={place.image} alt={place.name} />
        <h5>{place.name}</h5>
        <p>{place.description.substring(0, 100)}...</p>
      </div>
    </Link>
  );
}

export default TravelCard;
