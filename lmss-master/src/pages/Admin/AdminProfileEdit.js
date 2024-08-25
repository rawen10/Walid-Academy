import React, { useState } from 'react';

import './AdminProfileEdit.css';

const AdminProfileEdit = () => {
  const [name, setName] = useState('وليد بوحوش');
  const [email, setEmail] = useState('walid@example.com');
  const [phone, setPhone] = useState('+216 12345678');

  const handleSave = (e) => {
    e.preventDefault();
    // Add logic to save the updated profile information
    alert('تم حفظ التعديلات بنجاح!');
  };

  return (
    <div className="admin-profile-edit-container">
     
      <div className="admin-profile-edit-content">
        <h1>تعديل الملف الشخصي</h1>
        <form onSubmit={handleSave} className="edit-form">
          <div className="form-group">
            <label htmlFor="name">الإسم</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">رقم الهاتف</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="save-button">حفظ التعديلات</button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfileEdit;
