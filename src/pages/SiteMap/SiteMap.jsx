import React from 'react';
import '../../styles/SiteMap.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function SiteMap() {
  return (
    <>
      <Navbar isloggedIn={false} />
      <div className="sitemap">
        <section className="hero-section">
          <p className="hero--leading">Site Map</p>
          <div className="hero--img">
            <img src="/sitemap-small.svg" alt="sitemap" />
          </div>
        </section>
        <section className="links-section">
          <div className="links--container">
            <p className="links--leading">Company</p>
            <Link className="link" to="/">
              About us
            </Link>
            <Link className="link" to="/">
              Blog
            </Link>
            <Link className="link" to="/">
              Careers
            </Link>
            <Link className="link" to="/">
              Contact us
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Product</p>
            <Link className="link" to="/">
              Login
            </Link>
            <Link className="link" to="/">
              LoveMe Letter Generator
            </Link>
            <Link className="link" to="/">
              Pricing
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Resources</p>
            <Link className="link" to="/">
              Documentation
            </Link>
            <Link className="link" to="/">
              API reference
            </Link>
            <Link className="link" to="/">
              Sitemap
            </Link>
            <Link className="link" to="/">
              SDKs
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Support</p>
            <Link className="link" to="/">
              Help Center
            </Link>
            <Link className="link" to="/">
              Contact Us
            </Link>
            <Link className="link" to="/">
              Report Link bug
            </Link>
            <Link className="link" to="/">
              FAQs
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Legals</p>
            <Link className="link" to="/">
              Privacy Policy
            </Link>
            <Link className="link" to="/">
              Developer Policy
            </Link>
            <Link className="link" to="/">
              Terms & Conditions
            </Link>
            <Link className="link" to="/">
              Cookie Policy
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Social Media</p>
            <Link className="link" to="/">
              LoveMe Instagram
            </Link>
            <Link className="link" to="/">
              LoveMe Twitter
            </Link>
            <Link className="link" to="/">
              LoveMe Facebook
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
