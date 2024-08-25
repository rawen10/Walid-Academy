import React, { useState } from 'react';
import './Login.css';
import Header from '../../component/NavBar/header';

const LoginForm = () => {
  const [form, setForm] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <div className="container">
      <Header />
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>تسجيل الدخول</h1>

        <label htmlFor="emailOrPhone">رقم الهاتف أو البريد الإلكتروني *</label>
        <input
          type="text"
          id="emailOrPhone"
          name="emailOrPhone"
          value={form.emailOrPhone}
          onChange={handleChange}
          required
        />
        <small>يرجى إدخال عنوان بريدك الإلكتروني/رقم هاتفك</small>

        <label htmlFor="password">كلمة السّر *</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <small>يرجى إدخال كلمة المرور</small>

        <a href="#" className="forgot-password">نسيت كلمة السِّر؟</a>

        <button type="submit">تسجيل الدخول</button>
        <p>ليس لديك حساب؟ <a href="/register">انشاء حساب جديد</a></p>
      </form>
    </div>
  );
};

export default LoginForm;
