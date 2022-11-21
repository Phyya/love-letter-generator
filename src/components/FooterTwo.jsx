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
          <Link className="footer-link">Blog</Link>
          <Link className="footer-link">FAQ</Link>
          <Link className="footer-link">Letter Generator</Link>
          <Link className="footer-link">Privacy Policy</Link>
          <Link className="footer-link">Career</Link>
        </div>
        <div>
          <Link className="footer-link">Pricing</Link>
          <Link className="footer-link">About LoveMe</Link>
          <Link className="footer-link">Contact Us</Link>
          <Link className="footer-link">Sitemap</Link>
          <Link className="footer-link">Terms & Conditions</Link>
        </div>
      </div>
      <div className="footer-links footer-desktop">
        <div className="footer-logo footer-desktop--logo">
          <img
            src="/navbar-icon.svg"
            className="footer-logo--img"
            alt="navbar-icon"
          />
          <p className="footer-logo__text">LoveMe</p>
        </div>
        <div>
          <Link className="footer-link">Blog</Link>
          <Link className="footer-link">FAQ</Link>
          <Link className="footer-link">Privacy Policy</Link>
          <Link className="footer-link">Letter Generator</Link>
        </div>
        <div>
          <Link className="footer-link">Pricing</Link>
          <Link className="footer-link">Blog</Link>
          <Link className="footer-link">Terms & Conditions</Link>
          <Link className="footer-link">Career</Link>
        </div>
        <div>
          <Link className="footer-link">About LoveMe</Link>
          <Link className="footer-link">Contact Us</Link>
          <Link className="footer-link">Sitemap</Link>
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
