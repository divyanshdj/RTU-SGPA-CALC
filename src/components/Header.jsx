import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserGraduate } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo / Title */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-700 transition-colors"
          >
            <span className="text-blue-700 font-extrabold">RTU</span> SGPA Calculator
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`px-1 py-2 border-b-2 text-base font-semibold transition-colors ${location.pathname === '/' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/sgpa" 
              className={`px-1 py-2 border-b-2 text-base font-semibold transition-colors ${location.pathname === '/sgpa' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-300'}`}
            >
              SGPA Calc
            </Link>
            <Link 
              to="/percent" 
              className={`px-1 py-2 border-b-2 text-base font-semibold transition-colors ${location.pathname === '/percent' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-300'}`}
            >
              Percentage Convert
            </Link>
            <Link 
              to="/cgpa" 
              className={`px-1 py-2 border-b-2 text-base font-semibold transition-colors ${location.pathname === '/cgpa' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-300'}`}
            >
              CGPA Calc
            </Link>
            <Link 
              to="/profile" 
              className={`px-1 py-2 border-b-2 text-base font-semibold transition-colors ${location.pathname === '/profile' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-300'}`}
            >
                Profile
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className={`w-6 flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 bg-white">
          <Link
            to="/"
            className={`block px-3 py-3 rounded text-lg font-semibold ${location.pathname === '/' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            Home
          </Link>
          <Link
            to="/sgpa"
            className={`block px-3 py-3 rounded text-lg font-semibold ${location.pathname === '/sgpa' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            SGPA Calculator
          </Link>
          <Link
            to="/percent"
            className={`block px-3 py-3 rounded text-lg font-semibold ${location.pathname === '/percent' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            Percentage Convert
          </Link>
          <Link
            to="/cgpa"
            className={`block px-3 py-3 rounded text-lg font-semibold ${location.pathname === '/cgpa' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            CGPA Calculator
          </Link>
          <Link
            to="/profile"
            className={`block px-3 py-3 rounded text-lg font-semibold ${location.pathname === '/profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
          >
              Student Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;