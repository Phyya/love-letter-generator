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
        <div className="footer-logo footer-desktop--logo">
          <img
            src="/navbar-icon.svg"
            className="footer-logo--img"
            alt="navbar-icon"
          />
          <p className="footer-logo__text">
            <Link to="/">LoveMe</Link>
          </p>
        </div>
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
          <img src="/instagram.png" />
        </Link>
        <Link className="footer-social--link">
          <img src="/twitter.svg" />
        </Link>
        <Link className="footer-social--link">
          <img src="/facebook.svg" />
        </Link>
      </div>
      <div className="footer-copyright">2022 &copy; Copyright reserved</div>
    </footer>
  );
}
