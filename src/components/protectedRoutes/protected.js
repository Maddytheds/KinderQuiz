import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "../../utils/useAuth";

const Protected = () => {
  const token = useAuth();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default Protected;
