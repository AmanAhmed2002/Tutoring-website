import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="bg-red-600 text-white font-bold py-2 px-4 rounded-md"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 bg-white rounded-md shadow-lg w-40">
          <li className="hover:bg-red-600 hover:text-white">
            <Link className="block px-4 py-2 text-red-600 hover:text-white" to="/">Home</Link>
          </li>
          <li className="hover:bg-red-600 hover:text-white">
            <Link className="block px-4 py-2 text-red-600 hover:text-white" to="/subjects">Subjects</Link>
          </li>
          <li className="hover:bg-red-600 hover:text-white">
            <Link className="block px-4 py-2 text-red-600 hover:text-white" to="/educational-resources">Educational Resources</Link>
          </li>
          <li className="hover:bg-red-600 hover:text-white">
            <Link className="block px-4 py-2 text-red-600 hover:text-white" to="/pricing-plans">Pricing Plans</Link>
          </li>
          <li className="hover:bg-red-600 hover:text-white">
            <Link className="block px-4 py-2 text-red-600 hover:text-white" to="/signup">Sign Up</Link>
          </li>
          <li className="hover:bg-red-600 hover:text-white">
            <Link className="block px-4 py-2 text-red-600 hover:text-white" to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
