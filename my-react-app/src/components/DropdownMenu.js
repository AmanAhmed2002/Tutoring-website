import React from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  return (
    <nav className="bg-red-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center space-x-6 relative">
        <Link className="text-white hover:bg-red-700 py-2 px-4 rounded-md" to="/">Home</Link>
        <div 
          className="menu-item relative group"
          onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
        >
          <button className="menu-link">
            Educational Resources
          </button>
          <div className="dropdown absolute bg-red-700 text-white shadow-lg rounded-md hidden group-hover:block">
            <Link className="dropdown-link block px-4 py-2 hover:bg-red-800" to="/educational-resources/subjects">
              Subjects
            </Link>
            <Link className="dropdown-link block px-4 py-2 hover:bg-red-800" to="/educational-resources/math">
              Math Resources
            </Link>
            <Link className="dropdown-link block px-4 py-2 hover:bg-red-800" to="/educational-resources/physics">
              Physics Resources
            </Link>
          </div>
        </div>
        <Link className="text-white hover:bg-red-700 py-2 px-4 rounded-md" to="/pricing-plans">Pricing Plans</Link>
        <Link className="text-white hover:bg-red-700 py-2 px-4 rounded-md" to="/signup">Sign Up</Link>
        <Link className="text-white hover:bg-red-700 py-2 px-4 rounded-md" to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
}

export default DropdownMenu;
