import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./Dashboard/pages/AdminLogin";
import AdminSignup from "./Dashboard/pages/AdminSignup";
import AdminDashboard from "./Dashboard/pages/AdminDashboard";

import StudentLogin from "./Student/pages/StudentLogin";
import StudentSignup from "./Student/pages/StudentSignup";
import StudentDashboard from "./Student/pages/StudentDashboard";

// import Header from "./shared/components/Header";
// import Footer from "./shared/components/Footer";
// import PrivateRoute from "./shared/components/PriveteRoute";
// import PublicRoute from "./shared/components/PublicRout";
// const isLoggedIn = true;
//Student
import CoursePlayer from "./Student/pages/CoursePlayer";
import Leaderboard from "./Student/pages/Leaderboard";
import Quiz from "./Student/pages/Quiz";

//Admin
import Videos from "./Dashboard/pages/Videos";
import Assignment from "./Dashboard/pages/Assignment";
import Quizzes from "./Dashboard/pages/Quizzes";
import AssignmentMark from "./Dashboard/pages/AssignmentMark";

const RoutesNew = () => {
  return (
    <Router>
      {/* Admin Routes */}
      <Routes>
        <Route path="/dashboard/login" element={<AdminLogin />} />
        <Route path="/dashboard/signup" element={<AdminSignup />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/videos" element={<Videos />} />
        <Route path="/dashboard/assignment" element={<Assignment />} />
        <Route path="/dashboard/quizzes" element={<Quizzes />} />
        <Route path="/dashboard/assignmentMark" element={<AssignmentMark />} />

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
