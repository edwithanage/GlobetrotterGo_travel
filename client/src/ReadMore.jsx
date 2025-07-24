import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ReadMore() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("📦 Fetching data for ID:", id); // debug

    fetch(`http://localhost:3001/travel/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("❌ Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Data fetched:", data); // debug
        setPlace(data);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err.message);
        setError(err.message);
      });
  }, [id]);

  if (error) return <div className="text-danger text-center mt-5">Error: {error}</div>;
  if (!place) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>{place.name}</h2>
      <img src={place.image} alt={place.name} className="img-fluid my-3 rounded" />
      <p><strong>Description:</strong> {place.description}</p>
      <p><strong>Distance:</strong> {place.distance} km</p>
      <p><strong>Views:</strong> {place.views}</p>
      <p><strong>Date:</strong> {new Date(place.date).toLocaleDateString()}</p>
    </div>
  );
}

export default ReadMore;
