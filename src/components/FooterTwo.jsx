import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function FooterTwo() {
  return (
    <footer className="footer-container">
      <div className="footer-containers">
        <div className="footer-logo footer-mobile--logo">
          <img
            src="/navbar-icon.svg"
            className="footer-logo--img"
            alt="navbar-icon"
          />
          <p className="footer-logo__text">LoveMe</p>
        </div>
      </div>
      <div className="footer-links footer-mobile">
        <div>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <Link to="/survey" className="footer-link">
            Letter Generator
          </Link>
          <Link to="/privacypolicy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/career" className="footer-link">
            Career
          </Link>
        </div>
        <div>
          <Link to="/pricing" className="footer-link">
            Pricing
          </Link>
          <Link to="/about" className="footer-link">
            About LoveMe
          </Link>
          <Link to="/contactus" className="footer-link">
            Contact Us
          </Link>
          <Link to="/sitemap" className="footer-link">
            Sitemap
          </Link>
          <Link to="/termsofservice" className="footer-link">
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className="footer-links footer-desktop">
        <Link to="/" className="footer-home">
          <div className="footer-logo footer-desktop--logo">
            <img
              src="/navbar-icon.svg"
              className="footer-logo--img"
              alt="navbar-icon"
            />
            <p className="footer-logo__text">LoveMe</p>
          </div>
        </Link>
        <div>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <Link to="/privacypolicy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/survey" className="footer-link">
            Letter Generator
          </Link>
        </div>
        <div>
          <Link to="/pricing" className="footer-link">
            Pricing
          </Link>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/termsofservice" className="footer-link">
            Terms & Conditions
          </Link>
          <Link to="/career" className="footer-link">
            Career
          </Link>
        </div>
        <div>
          <Link to="/about" className="footer-link">
            About LoveMe
          </Link>
          <Link to="/contactus" className="footer-link">
            Contact Us
          </Link>
          <Link to="/sitemap" className="footer-link">
            Sitemap
          </Link>
        </div>
      </div>
      <div className="footer-social--links">
        <Link className="footer-social--link">
          <img src="/Instagram.png" />
        </Link>
        <Link className="footer-social--link">
          <img src="/Twitter.svg" />
        </Link>
        <Link className="footer-social--link">
          <img src="/Facebook.svg" />
        </Link>
      </div>
      <div className="footer-copyright">2022 &copy; Copyright reserved</div>
    </footer>
  );
}
