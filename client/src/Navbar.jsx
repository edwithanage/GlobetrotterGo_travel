import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4"
      style={{ backgroundColor: '#28a745' }} // Green background
    >
      <Link className="navbar-brand" to="/travel" style={{ color: '#fff' }}>
         GlobetrotterGo
      </Link>

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
            <Link className="nav-link" to="/travel" style={{ color: '#fff' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-place" style={{ color: '#fff' }}>
              Add Travel Place
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
