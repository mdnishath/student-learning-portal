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
//Student
import CoursePlayer from "./student/pages/CoursePlayer";
import Leaderboard from "./student/pages/Leaderboard";
import Quiz from "./student/pages/Quiz";

//Admin
import Videos from "./admin/pages/Videos";
import Assignment from "./admin/pages/Assignment";
import Quizzes from "./admin/pages/Quizzes";
import AssignmentMark from "./admin/pages/AssignmentMark";

const RoutesNew = () => {
  return (
    <Router>
      {/* Admin Routes */}
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/dashboard/videos" element={<Videos />} />
        <Route path="/admin/dashboard/assignment" element={<Assignment />} />
        <Route path="/admin/dashboard/quizzes" element={<Quizzes />} />
        <Route
          path="/admin/dashboard/assignmentMark"
          element={<AssignmentMark />}
        />

        {/* Student Routs */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/course-player" element={<CoursePlayer />} />
        <Route path="/student/leaderboard" element={<Leaderboard />} />
        <Route path="/student/quiz" element={<Quiz />} />

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
