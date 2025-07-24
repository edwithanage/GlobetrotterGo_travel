import { Link } from 'react-router-dom';

function TravelCard({ place }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={place.image} className="card-img-top" alt={place.name} />
      <div className="card-body">
        <h5 className="card-title">{place.name}</h5>
        <p className="card-text">{place.description.substring(0, 100)}...</p>
        <Link to={`/readmore/${place._id}`} className="btn btn-success">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default TravelCard;
