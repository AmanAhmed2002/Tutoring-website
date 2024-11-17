import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-gray-800 text-white rounded">
        Menu
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded shadow-xl">
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Sign Up Now</Link>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
