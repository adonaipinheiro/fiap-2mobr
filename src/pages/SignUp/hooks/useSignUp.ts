import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  function goToSignIn() {
    navigate("/signin", { replace: true });
  }

  function goToDashboard() {
    navigate("/", { replace: true });
  }

  return { goToSignIn, goToDashboard };
}
