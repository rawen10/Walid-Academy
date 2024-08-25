import React from 'react';
import AdminNavbar from '../../component/NavBar/AdminNavbar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      
      <div className="admin-dashboard-content">
        <h1>مرحبا بك في لوحة تحكم وليد بوحوش</h1>
        <div className="dashboard-widgets">
          <div className="widget">
            <h2>إحصائيات المستخدمين</h2>
            <p>عدد المستخدمين: 1500</p>
            <p>مستخدمين نشطين: 350</p>
          </div>
          <div className="widget">
            <h2>إحصائيات المواد</h2>
            <p>عدد المواد: 2</p>
            <p>المواد مكتملة: 0</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
