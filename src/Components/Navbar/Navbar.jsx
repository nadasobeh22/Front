import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-12">
        {/* Logo */}
        <Link to='/' className="text-2xl lg:text-3xl font-bold text-blue-500">
          Resto<span className='text-blue-300'>Manage</span>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl text-gray-700">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links and Buttons */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}>
          {/* Navigation Links */}
          <nav className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-lg font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-blue-500 transition">Menu</Link>
            <Link to="/reservations" className="text-gray-700 hover:text-blue-500 transition">Reservations</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</Link>
            <Link to="/AllProducts" className="text-gray-700 hover:text-blue-500 transition">AllProducts</Link>
          </nav>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Link to="/Login">
              <button className="px-4 lg:px-5 py-2 rounded-md font-semibold bg-gray-100 hover:bg-gray-200 transition text-gray-700">
                Login
              </button>
            </Link>
            <Link to='/cart'>
              <button className="text-gray-700 hover:text-blue-500 transition">
                <FaShoppingCart size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;