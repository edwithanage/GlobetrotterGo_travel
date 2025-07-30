import React, { useEffect, useState } from "react";
import './Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", comment: "", rating: 5 });
  const [highlightedId, setHighlightedId] = useState(null);

  const travelPlaceId = "64e8e8a2f1a123abc4567890"; // Replace with actual dynamic ID if needed

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
        setHighlightedId(newReview._id); // trigger animation
        setForm({ name: "", comment: "", rating: 5 });

        // Remove highlight after 3 seconds
        setTimeout(() => setHighlightedId(null), 3000);
      });
  };

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <div className="review-container">
      <h2>Reviews</h2>

      <form onSubmit={handleSubmit} className="review-form mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Comment"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          required
        />
        <input
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        />
        <button type="submit">Submit Review</button>
      </form>

      <div className="review-list">
        {reviews.map((review) => (
          <div
            key={review._id}
            className={`review-item ${highlightedId === review._id ? 'fade-in' : ''}`}
          >
            <strong>{review.name}</strong> <span>{renderStars(review.rating)}</span>
            <br />
            <small>{review.comment}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
