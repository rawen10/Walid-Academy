import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import fbLogo from '../../assets/fb.png'; // Ensure you have these icons in the assets folder
import igLogo from '../../assets/ig.png';
import tiktokLogo from '../../assets/tiktok.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="WalidAcademy Logo" />
      </div>
      <nav className="footer-nav-links">
        <a href="#">الرئيسية</a>
        <a href="#">من نحن؟</a>
        <a href="#">المنصة</a>
        <a href="#">محتوانا</a>
        <a href="#">عروضنا</a>
        <a href="#">تواصل معنا</a>
      </nav>
      <div className="footer-social-media">
        <a href="#"><img src={fbLogo} alt="Facebook Logo" /></a>
        <a href="#"><img src={igLogo} alt="Instagram Logo" /></a>
        <a href="#"><img src={tiktokLogo} alt="TikTok Logo" /></a>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024 Walid Academy Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
