// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Home() {
  return (
    <div className="home-hero">
      <header className="home-header">
        <h1>🌍 Discover Your Next Adventure</h1>
        <p>Explore holiday packages, activities, and more!</p>
        <div className="home-buttons">
          <Link to="/login" className="home-btn">Login</Link>
          <Link to="/register" className="home-btn">Register</Link>
          <Link to="/travel" className="home-btn">Explore Now</Link>
          <Link to="/reviews" className="home-btn">Read Reviews</Link>

        </div>
      </header>

      <section className="home-section">
        <h2>Upcoming Holiday Packages</h2>
        <p>Plan your next trip with exclusive packages.</p>
      </section>

      <section className="home-section">
        <h2>Popular Destinations</h2>
        <p>Find top-rated places loved by travelers.</p>
      </section>

      <section className="home-section">
        <h2>Upcoming Activities</h2>
        <p>Join local experiences and exciting tours.</p>
      </section>

      <section className="home-section">
        <h2>Travel Themes</h2>
        <p>Find the perfect vacation theme for your mood.</p>
      </section>

      <section className="home-section reviews">
        <h2>What People Are Saying</h2>
        <blockquote>"An unforgettable trip! Highly recommended!"</blockquote>
        <blockquote>"Best booking platform I've ever used!"</blockquote>
      </section>
    </div>
  );
}

export default Home;
