import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

// Importing pages
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import LoginForm from './pages/login/Login';
import StudentDashboard from './pages/Student/StudentDashboard';
import Profile from './pages/Student/Profile';
import ProfileEdit from './pages/Student/ProfileEdit';
import Offers from './pages/Student/Offers';
import Subjects from './pages/Student/Subjects';
import Help from './pages/Student/Help';
import SubjectDetails from './pages/Student/SubjectDetails';
import PeriodDetails from './pages/Student/PeriodDetails';
import LessonDetails from './pages/Student/LessonDetails';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminChangePassword from './pages/Admin/AdminChangePassword';
import AdminProfileEdit from './pages/Admin/AdminProfileEdit';
import AdminSubjects from './pages/Admin/AdminSubjects';
import AdminHelp from './pages/Admin/AdminHelp';
import AdminUsers from './pages/Admin/AdminUsers';

// Importing Navbar components
import AdminNavbar from '../src/component/NavBar/AdminNavbar';
import StudentNavbar from '../src/component/NavBar/studentNavbar';

function AppRouter() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        try {
          const response = await axios.get("http://localhost:4000/auth/getme", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.data) {
            setUser(response.data);
            setUserRole(response.data.role); // Assuming the role is part of the user data
          }
        } catch (error) {
          console.error("Token validation failed:", error);
          setUser(null);
          setUserRole(null);
        }
      }
    };

    validateToken(); // Validate the token on load
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to dashboard if user is authenticated */}
        {user ? (
          userRole === "Admin" ? (
            <Route path="*" element={<Navigate to="/admindashboard" />} />
          ) : userRole === "Student" ? (
            <Route path="*" element={<Navigate to="/dashboardstudent" />} />
          ) : null
        ) : (
          <>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}

        {/* Admin Routes */}
        {user && userRole === "Admin" && (
          <>
            <Route path="/admindashboard" element={<><AdminNavbar /><AdminDashboard /></>} />
            <Route path="/adminprofile" element={<><AdminNavbar /><AdminProfile /></>} />
            <Route path="/adminprofile/edit" element={<><AdminNavbar /><AdminProfileEdit /></>} />
            <Route path="/adminprofile/changepassword" element={<><AdminNavbar /><AdminChangePassword /></>} />
            <Route path="/adminsubjects" element={<><AdminNavbar /><AdminSubjects /></>} />
            <Route path="/adminhelp" element={<><AdminNavbar /><AdminHelp /></>} />
            <Route path="/adminusers" element={<><AdminNavbar /><AdminUsers /></>} />
          </>
        )}

        {/* Student Routes */}
        {user && userRole === "Student" && (
          <>
            <Route path="/dashboardstudent" element={<><StudentNavbar /><StudentDashboard /></>} />
            <Route path="/profile" element={<><StudentNavbar /><Profile /></>} />
            <Route path="/profile/edit" element={<><StudentNavbar /><ProfileEdit /></>} />
            <Route path="/offers" element={<><StudentNavbar /><Offers /></>} />
            <Route path="/subjects" element={<><StudentNavbar /><Subjects /></>} />
            <Route path="/help" element={<><StudentNavbar /><Help /></>} />
            <Route path="/subject/:subjectName" element={<><StudentNavbar /><SubjectDetails /></>} />
            <Route path="/subject/:subjectName/period/:periodNumber" element={<><StudentNavbar /><PeriodDetails /></>} />
            <Route path="/subject/:subjectName/period/:periodNumber/lesson/:lessonNumber" element={<><StudentNavbar /><LessonDetails /></>} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
