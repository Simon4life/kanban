import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
