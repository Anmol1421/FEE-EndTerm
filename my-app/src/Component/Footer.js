import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your newsletter subscription logic here
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/your-linkedin-page" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* Page Links */}
          <div className="page-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Newsletter Subscription Form */}
          <div className="newsletter-subscription">
            <h3>Subscribe to our newsletter</h3>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
