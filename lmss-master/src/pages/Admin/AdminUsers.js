import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiCheckCircle, FiXCircle, FiTrash } from 'react-icons/fi';
import './AdminUsers.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token")); // converiw la chaine de caractere en un objet 
      const response = await axios.get('http://localhost:5000/users/AllUsers', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (error) {
      setError('Failed to fetch users. Make sure you are authorized.');
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle toggling access for a user
  const handleToggleAccess = async (userId, currentAccess) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const newAccess = !currentAccess; // Toggle the access state
      await axios.patch(
        `http://localhost:5000/users/${userId}/access`, 
        { access: newAccess }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Update the local state after successful update
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, access: newAccess } : user
        )
      );
    } catch (error) {
      setError('Failed to update access.');
      console.error('Error updating access:', error);
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      await axios.delete(`http://localhost:5000/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      setError('Failed to delete user.');
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="admin-users-container">
      <h1>إدارة المستخدمين</h1>
      {error && <p className="error-message">{error}</p>}
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
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.telephone}</td>
              <td>{user.classe}</td>
              <td>{user.access ? 'نعم' : 'لا'}</td>
              <td>
                <button
                  className={`access-button ${user.access ? 'revoke' : 'grant'}`}
                  onClick={() => handleToggleAccess(user.id, user.access)}
                >
                  {user.access ? <FiXCircle /> : <FiCheckCircle />}
                  {user.access ? 'إلغاء الوصول' : 'منح الوصول'}
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <FiTrash /> حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
