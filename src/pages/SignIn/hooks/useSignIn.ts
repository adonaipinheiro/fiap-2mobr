import { useNavigate } from "react-router-dom";

export function useSignIn() {
  const navigate = useNavigate();

  function goToSignUp() {
    navigate("/signup");
  }

  function goToDashboard() {
    navigate("/", { replace: true });
  }

  return {
    goToSignUp,
    goToDashboard,
  };
}
