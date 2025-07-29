// ReviewPage.jsx
import React, { useState } from 'react';
import './ReviewPage.css';

function ReviewPage() {
  const [reviews, setReviews] = useState([
    { name: "Erandi", rating: 5, comment: "Amazing place!" },
    { name: "Saman", rating: 4, comment: "Loved it, very relaxing!" }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: '', comment: '' });
  };

  return (
    <div className="review-page">
      <h2>🌟 Travel Reviews</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleChange}
          required
        >
          <option value="">Rating</option>
          <option value="1">★☆☆☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="3">★★★☆☆</option>
          <option value="4">★★★★☆</option>
          <option value="5">★★★★★</option>
        </select>
        <textarea
          name="comment"
          placeholder="Your comment..."
          value={newReview.comment}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Review</button>
      </form>

      <div className="review-list">
        {reviews.map((rev, index) => (
          <div key={index} className="review-item">
            <h4>{rev.name}</h4>
            <p>{"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}</p>
            <p>{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
