// src/LandingPage.tsx

import React from 'react';
import Header from '../header/header.tsx';

const LandingPage: React.FC = () => {
    return (
      <div className="landing-page">
        <Header></Header>
        <header>
          <h1>Welcome to Your Digital Marketing Agency</h1>
          <p>We help businesses grow their online presence and reach their target audience.</p>
        </header>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing (SMM)</li>
            <li>Content Marketing</li>
            <li>Email Marketing</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
          </ul>
        </section>
        <footer>
          <p>Contact us to learn more about how we can help your business succeed online.</p>
        </footer>
      </div>
    );
  };
  

export default LandingPage;
