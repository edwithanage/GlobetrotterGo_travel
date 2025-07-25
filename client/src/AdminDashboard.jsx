import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    fetch('http://localhost:3001/travel')
      .then(res => res.json())
      .then(data => setPlaces(data))
      .catch(err => console.error('Failed to fetch travel places:', err));
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-card">
        <h1>Welcome, Admin!</h1>
        <p>You have full access to manage travel content.</p>

        <div className="admin-buttons">
          <button onClick={() => navigate('/add-place')} className="btn btn-success">
            ➕ Add Travel Place
          </button>
          <button onClick={() => navigate('/travel')} className="btn btn-primary">
            📍 View All Places
          </button>
          <button onClick={handleLogout} className="btn btn-danger">
            🚪 Logout
          </button>
        </div>
      </div>

      <div className="admin-preview-section">
        <h3>📌 Recently Added Places</h3>
        <div className="card-grid">
          {places.slice(-3).reverse().map((place) => (
            <div key={place._id} className="admin-preview-card">
              <img src={place.image} alt={place.name} />
              <h5>{place.name}</h5>
              <p>{place.description.substring(0, 80)}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
