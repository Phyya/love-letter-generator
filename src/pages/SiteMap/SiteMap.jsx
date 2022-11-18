import React from 'react';
import '../../styles/SiteMap.css';
// import {a} from "react-router-dom"

export function SiteMap() {
  return (
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
          <a className="link" href="/">
            About us
          </a>
          <a className="link" href="/">
            Blog
          </a>
          <a className="link" href="/">
            Careers
          </a>
          <a className="link" href="/">
            Contact us
          </a>
        </div>
        <div className="links--container">
          <p className="links--leading">Product</p>
          <a className="link" href="/">
            Login
          </a>
          <a className="link" href="/">
            LoveMe Letter Generator
          </a>
          <a className="link" href="/">
            Pricing
          </a>
        </div>
        <div className="links--container">
          <p className="links--leading">Resources</p>
          <a className="link" href="/">
            LogIn
          </a>
          <a className="link" href="/">
            LoveMe Letter Generator
          </a>
          <a className="link" href="/">
            Pricing
          </a>
        </div>
        <div className="links--container">
          <p className="links--leading">Support</p>
          <a className="link" href="/">
            Help Center
          </a>
          <a className="link" href="/">
            Contact Us
          </a>
          <a className="link" href="/">
            Report a bug
          </a>
          <a className="link" href="/">
            FAQs
          </a>
        </div>
        <div className="links--container">
          <p className="links--leading">Legals</p>
          <a className="link" href="/">
            Privacy Policy
          </a>
          <a className="link" href="/">
            Developer Policy
          </a>
          <a className="link" href="/">
            Terms & Conditions
          </a>
          <a className="link" href="/">
            Cookie Policy
          </a>
        </div>
        <div className="links--container">
          <p className="links--leading">Social Media</p>
          <a className="link" href="/">
            LoveMe Instagram
          </a>
          <a className="link" href="/">
            LoveMe Twitter
          </a>
          <a className="link" href="/">
            LoveMe Facebook
          </a>
        </div>
      </section>
    </div>
  );
}
