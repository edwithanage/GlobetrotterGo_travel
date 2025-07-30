// src/Reviews.jsx
import React, { useEffect, useState } from "react";
import './Reviews.css';



function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", comment: "", rating: 5 });

  const travelPlaceId = "64e8e8a2f1a123abc4567890"; // Replace with actual place ID or pass as prop/state

  useEffect(() => {
    fetch(`http://localhost:3001/reviews/${travelPlaceId}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [travelPlaceId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, travelPlaceId })
    })
      .then(res => res.json())
      .then((newReview) => {
        setReviews([newReview, ...reviews]);
        setForm({ name: "", comment: "", rating: 5 });
      });
  };

  return (
    <div className="container mt-5">
      <h2>Reviews</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="form-control mb-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Your Comment"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          required
        />
        <input
          type="number"
          className="form-control mb-2"
          min="1"
          max="5"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        />
        <button className="btn btn-primary">Submit Review</button>
      </form>

      <ul className="list-group">
        {reviews.map((review) => (
          <li key={review._id} className="list-group-item">
            <strong>{review.name}</strong> ({review.rating}/5)
            <br />
            {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
