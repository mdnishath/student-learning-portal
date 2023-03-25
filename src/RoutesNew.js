import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminSignup from "./admin/pages/AdminSignup";
import AdminDashboard from "./admin/pages/AdminDashboard";

import StudentLogin from "./student/pages/StudentLogin";
import StudentSignup from "./student/pages/StudentSignup";
import StudentDashboard from "./student/pages/StudentDashboard";

// import Header from "./shared/components/Header";
// import Footer from "./shared/components/Footer";
// import PrivateRoute from "./shared/components/PriveteRoute";
// import PublicRoute from "./shared/components/PublicRout";
// const isLoggedIn = true;
import CoursePlayer from "./student/pages/CoursePlayer";

const RoutesNew = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/" element={<StudentLogin />} />
        <Route path="/student/course-player" element={<CoursePlayer />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
          isLoggedIn={true}
        />

        {/* Add other routes as needed */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default RoutesNew;
