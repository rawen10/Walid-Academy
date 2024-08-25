import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

import './AdminUsers.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Example users data
    const exampleUsers = [
      { id: 1, surname: 'Doe', name: 'John', phone: '1234567890', grade: 'الأولى 1 ابتدائي', hasAccess: false },
      { id: 2, surname: 'Smith', name: 'Jane', phone: '0987654321', grade: 'الثانية 2 ابتدائي', hasAccess: true },
      { id: 3, surname: 'Ali', name: 'Ahmed', phone: '111222333', grade: 'الثالثة 3 ابتدائي', hasAccess: false },
      { id: 4, surname: 'Ben Salah', name: 'Amira', phone: '444555666', grade: 'الرابعة 4 ابتدائي', hasAccess: true },
      { id: 5, surname: 'Khelifa', name: 'Nour', phone: '777888999', grade: 'الخامسة 5 ابتدائي', hasAccess: true },
      { id: 6, surname: 'Mansour', name: 'Rami', phone: '000111222', grade: 'السادسة 6 ابتدائي', hasAccess: false }
    ];

    setUsers(exampleUsers);
  }, []);

  const handleToggleAccess = async (userId, currentStatus) => {
    // Simulating backend update by directly updating state
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, hasAccess: !currentStatus } : user
      )
    );
  };

  return (
    <div>
     
      <div className="admin-users-container">
        <h1>إدارة المستخدمين</h1>
        <table className="users-table">
          <thead>
            <tr>
              <th>اللقب</th>
              <th>الإسم</th>
              <th>رقم الهاتف</th>
              <th>القسم</th>
              <th>الوصول للفيديوهات</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.surname}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.grade}</td>
                <td>{user.hasAccess ? 'نعم' : 'لا'}</td>
                <td>
                  <button
                    className={`access-button ${user.hasAccess ? 'revoke' : 'grant'}`}
                    onClick={() => handleToggleAccess(user.id, user.hasAccess)}
                  >
                    {user.hasAccess ? <FiXCircle /> : <FiCheckCircle />}
                    {user.hasAccess ? 'إلغاء الوصول' : 'منح الوصول'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
