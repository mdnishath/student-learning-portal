import { Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { useParams } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isLoggedIn = true;
  return !isLoggedIn ? children : <Navigate to={"/"} replace />;
}
