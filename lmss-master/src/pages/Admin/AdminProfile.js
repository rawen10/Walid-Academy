import React from 'react';
import { Link } from 'react-router-dom';

import './AdminProfile.css';

const AdminProfile = () => {
  return (
    <div className="admin-profile-container">
     
      <div className="admin-profile-content">
        <div className="profile-header">
          <img 
            src="/path/to/profile-picture.jpg" 
            alt="Admin Profile" 
            className="profile-picture" 
          />
          <h1>وليد بوحوش</h1>
        </div>
        <div className="profile-details">
          <h2>معلومات الحساب</h2>
          <p><strong>الإسم:</strong> وليد بوحوش</p>
          <p><strong>البريد الإلكتروني:</strong> walid@example.com</p>
          <p><strong>رقم الهاتف:</strong> +216 12345678</p>
        </div>
        <div className="profile-actions">
          <Link to="/adminprofile/edit" className="edit-button-link">
            <button className="edit-button">تعديل الملف الشخصي</button>
          </Link>
          <Link to="/adminprofile/changepassword" className="password-button-link">
            <button className="password-button">تغيير كلمة المرور</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
