import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
  // Mock user role, replace this with actual authentication logic
  const userRole = "admin"; // Change this to "student" to test student routes

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Conditional Routes based on user role */}
        {userRole === "admin" ? (
          <>
            <Route path="/admindashboard" element={<><AdminNavbar /><AdminDashboard /></>} />
            <Route path="/adminprofile" element={<><AdminNavbar /><AdminProfile /></>} />
            <Route path="/adminprofile/edit" element={<><AdminNavbar /><AdminProfileEdit /></>} />
            <Route path="/adminprofile/changepassword" element={<><AdminNavbar /><AdminChangePassword /></>} />
            <Route path="/adminsubjects" element={<><AdminNavbar /><AdminSubjects /></>} />
            <Route path="/adminhelp" element={<><AdminNavbar /><AdminHelp /></>} />
            <Route path="/adminusers" element={<><AdminNavbar /><AdminUsers /></>} />
          </>
        ) : (
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

        {/* Redirect if the user role does not match */}
        <Route path="*" element={<Navigate to={userRole === "admin" ? "/admindashboard" : "/dashboardstudent"} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
