// src/components/Header.tsx

import React from 'react';
import './header.css'; // Import CSS file for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Digital Dream</h1>
        <nav className="nav">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
