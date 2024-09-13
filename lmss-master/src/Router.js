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
          const response = await axios.get("http://localhost:5000/auth/getme", {
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
      console.log("user",user)
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
            <Route path="/admindashboard" element={<><AdminNavbar user={user}  /><AdminDashboard /></>} />
            <Route path="/adminprofile" element={<><AdminNavbar user={user} /><AdminProfile user={user} /></>} />
            <Route path="/adminprofile/edit" element={<><AdminNavbar user={user} /><AdminProfileEdit /></>} />
            <Route path="/adminprofile/changepassword" element={<><AdminNavbar user={user} /><AdminChangePassword /></>} />
            <Route path="/adminsubjects" element={<><AdminNavbar user={user} /><AdminSubjects /></>} />
            <Route path="/adminhelp" element={<><AdminNavbar user={user} /><AdminHelp /></>} />
            <Route path="/adminusers" element={<><AdminNavbar user={user} /><AdminUsers /></>} />
          </>
        )}

        {/* Student Routes */}
        {user && userRole === "Student" && (
          <>
            <Route path="/dashboardstudent" element={<><StudentNavbar user={user} /><StudentDashboard /></>} />
            <Route path="/profile" element={<><StudentNavbar user={user} /><Profile /></>} />
            <Route path="/profile/edit" element={<><StudentNavbar user={user} /><ProfileEdit /></>} />
            <Route path="/offers" element={<><StudentNavbar user={user} /><Offers /></>} />
            <Route path="/subjects" element={<><StudentNavbar user={user} /><Subjects /></>} />
            <Route path="/help" element={<><StudentNavbar user={user} /><Help /></>} />
            <Route path="/subject/:subjectId/periods" element={<><StudentNavbar user={user} /><SubjectDetails /></>} />
            <Route path="/subject/:subjectName/period/:periodNumber" element={<><StudentNavbar user={user} /><PeriodDetails /></>} />
            <Route path="/subject/:subjectName/period/:periodNumber/lesson/:lessonNumber" element={<><StudentNavbar user={user} /><LessonDetails /></>} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
