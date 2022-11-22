import React from 'react';
import '../../styles/SiteMap.css';
import { Link } from 'react-router-dom';
import FooterTwo from '../../components/FooterTwo';
import Navbar from '../../components/Navbar/Navbar';

export default function SiteMap() {
  return (
    <>
      <Navbar />
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
            <Link className="site-link" to="/aboutus">
              About us
            </Link>
            <Link className="site-link" to="/blog">
              Blog
            </Link>
            <Link className="site-link" to="/careers">
              Careers
            </Link>
            <Link className="site-link" to="/contactus">
              Contact us
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Product</p>
            <Link className="site-link" to="/login">
              Login
            </Link>
            <Link className="site-link" to="/">
              LoveMe Letter Generator
            </Link>
            <Link className="site-link" to="/pricing">
              Pricing
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Resources</p>
            <Link className="site-link" to="/documentation">
              Documentation
            </Link>
            <Link className="site-link" to="/api">
              API reference
            </Link>
            <Link className="site-link" to="/sitemap">
              Sitemap
            </Link>
            <Link className="site-link" to="/sdks">
              SDKs
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Support</p>
            <Link className="site-link" to="/helpcenter">
              Help Center
            </Link>
            <Link className="site-link" to="/contactus">
              Contact Us
            </Link>
            <Link className="site-link" to="/">
              Report Link bug
            </Link>
            <Link className="site-link" to="/faqs">
              FAQs
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Legals</p>
            <Link className="site-link" to="/privacypolicy">
              Privacy Policy
            </Link>
            <Link className="site-link" to="/developerpolicy">
              Developer Policy
            </Link>
            <Link className="site-link" to="/termsofservice">
              Terms & Conditions
            </Link>
            <Link className="site-link" to="/cookiepolicy">
              Cookie Policy
            </Link>
          </div>
          <div className="links--container">
            <p className="links--leading">Social Media</p>
            <Link className="site-link" to="/">
              LoveMe Instagram
            </Link>
            <Link className="site-link" to="/">
              LoveMe Twitter
            </Link>
            <Link className="site-link" to="/">
              LoveMe Facebook
            </Link>
          </div>
        </section>
      </div>
      <FooterTwo />
    </>
  );
}
