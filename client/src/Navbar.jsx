import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        
      <Link className="navbar-brand" to="/travel">🌍 TravelRoutes</Link>

      {/* Navbar toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/travel">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-place">Add Travel Place</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
