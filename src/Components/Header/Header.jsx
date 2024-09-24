import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="shadow sticky z-50 top-0 ">
        <nav className="bg-gray-200 border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.pinimg.com/474x/6d/83/9b/6d839b97fe44a00b020cf2c74d3a2804.jpg"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
            <button
              className="text-gray-700 lg:hidden block"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
            <div
              className={`${isOpen ? 'block' : 'hidden'
                } w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 mt-4 font-medium">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Workout"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Workout
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Diet1"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Nutrition
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/healthy-living"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Healthy-Living
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Cards"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Cards
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Betterment"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Betterments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/BmiCalculator"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    BMI
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact-Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
