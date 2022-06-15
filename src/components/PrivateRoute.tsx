import { Navigate } from "react-router-dom";
import { useQuizContext } from "../context";

interface PrivateProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateProps) => {
  const { isStarted } = useQuizContext();

  return isStarted ? children : <Navigate to="/" />;
};
