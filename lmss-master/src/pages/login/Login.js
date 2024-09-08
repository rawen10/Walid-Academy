import React, { useState } from "react";
import "./Login.css";
import Header from "../../component/NavBar/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");  // Ajouter un état pour le message de succès
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("token", JSON.stringify(response?.data));
      
      setSuccessMessage("Connexion réussie ! Redirection en cours..."); 
      window.location.reload();

      
      // setTimeout(() => {
      //   navigate("/dashboardstudent");  // Rediriger après un délai
      // }, 2000);// Attendre 2 secondes avant de rediriger
      
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
        toast.error(errorMessage);
      }
  };

  return (
    <div className="container">
      <Header />
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>تسجيل الدخول</h1>

        <label htmlFor="email">رقم الهاتف أو البريد الإلكتروني *</label>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
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

        <a href="#" className="forgot-password">
          نسيت كلمة السِّر؟
        </a>

        <div className="inputBx">
          <input
            type="submit"
            value="تسجيل الدخول"
            style={{ backgroundColor: "#28a645", color: "white", fontSize: 17 }}
          />
        </div>
        <p>
          ليس لديك حساب؟ <a href="/register">انشاء حساب جديد</a>
        </p>

        {successMessage && (
          <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>
        )}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default LoginForm;
