import React, { useEffect, useState } from 'react';
// import logo1 from '../../assets/logos/logo1.svg';
import logo from '../../assets/logos/logo.svg';
import { NavLink } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isAuthenticated, isManager, logout } = useAuthStore();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setIsOpen(false);
        setIsScrolling(false);
      }
      if (window.scrollY > 35) {
        setIsScrolling(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, isScrolling]);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    window.location.reload() || window.location.replace('/');
  }
  const headerBgClass =
    isHomePage && !isScrolling ? 'bg-richBlack/60' : 'bg-richBlack';
  const headerTextColor =
    isHomePage && !isScrolling ? 'text-white' : 'text-white';

  return (
    <header
      className={`
        fixed top-0 max-w-[1520px] z-50 w-full
        ${headerBgClass}
        ${headerTextColor}
        ${
          isHomePage
            ? isScrolling
              ? 'border-b-1'
              : 'border-b-1'
            : 'pb-2 mb-12'
        } 
      `}
    >
      <nav className="text-xl font-semi-bold flex items-center justify-between max-w-[1520px] px-8 py-2 mx-auto relative">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-60" />
        </NavLink>
        <div className="md:hidden">
          <HamburgerMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleLogout={handleLogout}
            isAuthenticated={isAuthenticated}
            isManager={isManager}
          />
        </div>
        <div className="hidden md:block">
          <DesktopMenu
            handleLogout={handleLogout}
            isAuthenticated={isAuthenticated}
            isManager={isManager}
          />
        </div>
      </nav>
    </header>
  );
}

function HamburgerMenu({
  isOpen,
  setIsOpen,
  handleLogout,
  isAuthenticated,
  isManager,
}) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className={`
              flex flex-col justify-center items-center gap-1.5 w-12 h-12
              transition-all duration-300 ease-in-out
              ${
                isOpen
                  ? 'border border-white rounded-full'
                  : 'border-transparent rounded-none'
              }
        
            `}
      >
        <span
          className={`block h-0.5 bg-white transition-all duration-300 ease-in-out
            ${
              isOpen ? 'w-6 -rotate-45 translate-y-1.5' : 'w-4 self-start ml-3'
            }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out 
            ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out 
            ${isOpen ? 'rotate-45 scale-x-[-1] -translate-y-1.5' : ''}`}
        ></span>
      </button>

      <div className="z-50 relative mt-">
        <div
          className={`fixed left-0 w-full top-[88.88px] bg-richBlack/60 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className=" flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            <li>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>

            <li>
              <NavLink to="/contactUs">Contact us</NavLink>
            </li>

            {!isAuthenticated && (
              <>
                <li>
                  <NavLink to="/login">Log in</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
            {!isManager && isAuthenticated && (
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            )}
            {isAuthenticated && isManager && (
              <li>
                <NavLink to="/manager">Manager</NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <button onClick={handleLogout}>Log out</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

function DesktopMenu({ handleLogout, isAuthenticated, isManager }) {
  return (
    <ul className="flex gap-4 mx-4">
      <li>
        <NavLink to="/aboutUs">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact us</NavLink>
      </li>
      {!isAuthenticated && (
        <>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
      {!isManager && isAuthenticated && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
      {isAuthenticated && isManager && (
        <li>
          <NavLink to="/manager">Manager</NavLink>
        </li>
      )}

      {isAuthenticated && (
        <li>
          <button onClick={handleLogout}>Log out</button>
        </li>
      )}
    </ul>
  );
}
