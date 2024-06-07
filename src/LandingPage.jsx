import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const LandingPage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">MyWebsite</div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyWebsite</h1>
          <p>Your journey to awesome starts here.</p>
          <div className="button-group">
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
