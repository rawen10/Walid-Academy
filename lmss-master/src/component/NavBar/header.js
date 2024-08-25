import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Ensure the logo image is correctly placed

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="WalidAcademy Logo" />
      </div>
      <nav className="nav-links">
        <a href="/">الرئيسية</a>
        <a href="/#about">من نحن؟</a>
        <a href="/#platform">المنصة</a>
        <a href="/#content">محتوانا</a>
        <a href="/#offers">عروضنا</a>
      </nav>
      <div className="actions">
        <Link to="/login" className="login">تسجيل الدخول</Link>
        <Link to="/register" className="signup">سجل مجانا</Link>
      </div>
    </header>
  );
};

export default Header;
