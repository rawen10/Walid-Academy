import React from 'react';
import './ProfileEdit.css';

const ProfileEdit = () => {
  return (
    <div>
      
      <div className="profile-edit-container">
      
      <div className="profile-edit-content">
        <h2>أكمل المعطيات</h2>
        <div className="section">
          <h3>معلومات شخصية</h3>
          <div className="form-group">
            <label>اللقب</label>
            <input type="text" defaultValue="Mzoughi" />
          </div>
          <div className="form-group">
            <label>الإسم</label>
            <input type="text" defaultValue="Firas" />
          </div>
          <div className="form-group">
            <label>رقم الهاتف</label>
            <input type="text" defaultValue="51949518" />
          </div>
          <div className="form-group">
            <label>Numéro de téléphone du parent</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>تاريخ الولادة</label>
            <input type="date" defaultValue="2013-09-30" />
          </div>
          <div className="form-group">
            <label>الجنس</label>
            <select>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>
          <button className="save-button">حفظ التعديل</button>
        </div>
        <div className="section">
          <h3>معلومات أكاديمية</h3>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>القسم</label>
            <input type="text" defaultValue="الرابعة 4 ابتدائي" />
          </div>
          <div className="form-group">
            <label>العنوان</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>البلد</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>الولاية</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>المعتمديّة</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>معهد</label>
            <input type="text" />
          </div>
          <button className="save-button">حفظ التعديل</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileEdit;
