import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Auth from '../../utils/auth';
import NavbarLayout from './NavbarLayout';
import StyledButton from '../common/StyledButton';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Remove user data from local storage
    localStorage.removeItem('user');

    // Logs the user out by calling the logout method from Auth
    Auth.logout();
  };

  return (
    <header>
      <NavbarLayout>
        <div className="logo">
          <Link style={{ color: '#C466FF' }} to="/">
            <h1>Capsule Time</h1>
          </Link>
        </div>

        {/* Hamburger menu button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Nav links (dropdown for mobile) */}
        <ul className={`nav ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <StyledButton buttonType="primary">Home</StyledButton>
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              <StyledButton buttonType="primary">Profile</StyledButton>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <StyledButton buttonType="primary">About</StyledButton>
            </Link>
          </li>
          <li>
            <StyledButton buttonType="default" onClick={logout}>
              Logout
            </StyledButton>
          </li>
        </ul>
      </NavbarLayout>
    </header>
  );
};

export default Header;
