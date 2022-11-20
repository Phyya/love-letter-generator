import React from 'react';
import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
export default function Navbar() {
  const [dropdown, setdropdown] = React.useState(false);
  const { user } = useAuthContext();
  function handleDropdown() {
    setdropdown((prev) => !prev);
  }
  return (
    <header className="navbar">
      <nav>
        <div className="navbar-container">
          <div className="nav-logo">
            <img
              src="/navbar-icon.svg"
              className="nav-logo--img"
              alt="navbar-icon"
            />
            <p className="nav-logo__text">LoveMe</p>
          </div>
          <div className="desktop">
            <ul className="nav--links">
              <li>
                <Link to="/survey" className="nav-link">
                  Generator
                </Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li>
                {!user && (
                  <Link to="/signin" className="nav-link">
                    <button className="login desktop">LogIn</button>
                  </Link>
                )}
                {user && (
                  <Link to="/profile" className="nav-link dash">
                    <img src="/nav-arrow.svg" className="dash-arrow" />
                    <img src="" className="profile" />
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="mobile" onClick={handleDropdown}>
            <img className="dropdown" src="/menu-burger.svg" />
          </div>
        </div>
        <div className="mobile">
          {dropdown && (
            <ul className="nav--links">
              <li>
                <Link to="/" className="nav-link">
                  Generator
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li>
                {!user && (
                  <Link to="/signin" className="nav-link">
                    LogIn
                  </Link>
                )}
                {user && (
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                )}
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

// Navbar.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired,
// };
