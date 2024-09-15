import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

// Define bankDetails outside the component
const bankDetails = [
  {
    bankName: "بنك الزيتونة",
    accountName: "Bouhouch Walid",
    iban: "25058000000019370721",
  },

  {
    bankName: "البريد التونسي",
    accountName: "Carte e-dinar smart",
    iban: "17535940172451790535",
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
