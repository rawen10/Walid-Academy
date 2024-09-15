import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

// Define bankDetails outside the component
const bankDetails = [
  {
    bankName: "بنك الزيتونة",
    accountName: "WalidAcademy",
    iban: "25 006 0000000317041 86",
  },
  {
    bankName: "بنك تونس العربي الدولي",
    accountName: "WalidAcademy",
    iban: "08 139 0310110000790 88",
  },
  {
    bankName: "البريد التونسي",
    accountName: "WalidAcademy",
    iban: "1750 3000 0003 1179 2828",
  },
];

const Profile = ({ user }) => {
  // Debugging: Check if `user` is being passed correctly
  useEffect(() => {
    console.log("User data: ", user);
  }, [user]);

  return (
    <div>
      <div className="profile-container">
        <div className="profile-content">
          <div className="user-info-section">
            <h2>ملفي الشخصي</h2>
            
            <div className="user-info">
              <p><strong>الاسم: {user?.nom|| "Name not available"}</strong></p>
              <p> القسم: {user?.classe || "Class not available"}</p>
              <p>رقم المستخدم: {user?.id  || "ID not available"}</p>
              <p>رقم الهاتف: {user?.telephone || "Phone not available"}</p>
              <p>البريد الإلكتروني: {user?.email  || "Address not available"}</p>
            </div>
          </div>

          <div className="bank-details-section">
            <h2>طرق الدفع</h2>
            <div className="bank-details">
              {bankDetails.map((bank, index) => (
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
