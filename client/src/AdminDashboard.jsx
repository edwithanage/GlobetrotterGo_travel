import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // optional if you're storing login
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-card">
        <h1>Welcome, Admin!</h1>
        <p>You have full access to manage the system.</p>

        <div className="admin-buttons">
          <button onClick={() => navigate('/travel')} className="btn btn-primary">
            View Travel Places
          </button>
          <button onClick={() => navigate('/add-place')} className="btn btn-success">
            Add New Place
          </button>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
