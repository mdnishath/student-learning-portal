import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin/Admin";
import Student from "./pages/Student/Student";
import AdminRoutes from "./pages/Admin/AdminRoutes";
import StudentRoutes from "./pages/Student/StudentRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<StudentRoutes />} />
      </Routes>
    </Router>
  );
}
export default App;
