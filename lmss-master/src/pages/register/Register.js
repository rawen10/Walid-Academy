import React, { useState } from "react";
import "./Register.css";
import Header from "../../component/NavBar/header";
import axios from "axios";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    surname: "",
    name: "",
    phone: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    grade: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (form.password !== form.confirmPassword) {
      console.log("Passwords do not match");
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      console.log("Sending request...");
      const response = await axios.post("http://localhost:4000/users/AddUser", {
        prenom: form.surname,
        nom: form.name,
        telephone: form.phone,
        naissance: form.birthdate,
        email: form.email,
        password: form.password,
        lieux: form.state,
        classe: form.grade,
        role: "Student",
      });

      console.log("Response received", response);
      if (response.status === 201) {
        console.log("Utilisateur créé avec succès");
      }
    } catch (error) {
      console.error("Erreur lors de la création de l’utilisateur:", error);
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  console.log(form, "form");
  const states = [
    "أريانة",
    "باجة",
    "بنزرت",
    "تطاوين",
    "توزر",
    "تونس",
    "جندوبة",
    "زغوان",
    "سليانة",
    "سوسة",
    "سيدي بوزيد",
    "صفاقس",
    "قابس",
    "القصرين",
    "قبلي",
    "القيروان",
    "الكاف",
    "مدنين",
    "المنستير",
    "منوبة",
    "المهدية",
    "نابل",
  ];

  const grades = [
    "الرابعة 4 ابتدائي",
    "الخامسة 5 ابتدائي",
    "السادسة 6 ابتدائي",
  ];

  return (
    <div className="container">
      <Header />
      <form className="registration-form">
        <h1>إنشاء حساب جديد</h1>

        {/* {error && <p className="error-message">{error}</p>} */}

        <label htmlFor="surname">اللقب *</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">الإسم *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">رقم الهاتف *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <small>ستستقبل ارسالية قصيرة. الرجاء التثبت من صحة الرقم</small>

        <label htmlFor="birthdate">تاريخ الولادة *</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">البريد الإلكتروني *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">كلمة السّر *</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">تأكيد كلمة السّر *</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <label htmlFor="state">اختر ولايتك *</label>
        <select
          id="state"
          name="state"
          value={form.state}
          onChange={handleChange}
          required
        >
          <option value="">اختر ولايتك</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <label htmlFor="grade">اختر قسمك *</label>
        <select
          id="grade"
          name="grade"
          value={form.grade}
          onChange={handleChange}
          required
        >
          <option value="">اختر قسمك</option>
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>

        {/* <button type="submit" onSubmit={handleSubmit}>
          إنشاء حساب جديد
        </button> */}

        <div className="inputBx">
          <input type="submit" value="إنشاء حساب جديد" onClick={handleSubmit} style={{backgroundColor:"#28a645", color:"white" ,fontSize:17}}/>
        </div>
        <p>
          هل لديك حساب؟ <a href="#">تسجيل الدخول</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
