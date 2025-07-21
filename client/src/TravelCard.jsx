import { Link } from 'react-router-dom';

function TravelCard({ place }) {
  return (
    <div className="travel-card">
      <Link to={`/place/${place.id}`}>
        <img src={place.image} alt={place.name} />
      </Link>
      <h3>{place.name}</h3>
      <p>{place.description}</p>
    </div>
  );
}

export default TravelCard;
