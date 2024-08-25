import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';


const Profile = () => {
  const user = {
    name: "Firas Mzoughi",
    class: "الرابعة 4 ابتدائي",
    userId: "415852",
    phone: "51949518",
    address: "تونس 1",
    bankDetails: [
      {
        bankName: "بنك الزيتونة",
        accountName: "WalidAcademy",
        iban: "25 006 0000000317041 86"
      },
      {
        bankName: "بنك تونس العربي الدولي",
        accountName: "WalidAcademy",
        iban: "08 139 0310110000790 88"
      },
      {
        bankName: "البريد التونسي",
        accountName: "WalidAcademy",
        iban: "1750 3000 0003 1179 2828"
      }
    ]
  };

  return (
    <div>
    
      <div className="profile-container">
        <div className="profile-content">
          <div className="user-info-section">
            <h2>ملفي الشخصي</h2>
            <Link to="/profile/edit" className="edit-button">تعديل</Link>
            <div className="user-info">
              <p><strong>{user.name}</strong></p>
              <p>{user.class}</p>
              <p>رقم المستخدم: {user.userId}</p>
              <p>رقم الهاتف: {user.phone}</p>
              <p>العنوان: {user.address}</p>
            </div>
          </div>
          <div className="bank-details-section">
            <h2>طرق الدفع</h2>
            <div className="bank-details">
              {user.bankDetails.map((bank, index) => (
                <div key={index} className="bank-info">
                  <p><strong>{bank.bankName}</strong></p>
                  <p>الحساب: {bank.accountName}</p>
                  <p>رقم التعريف البنكي: {bank.iban}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
