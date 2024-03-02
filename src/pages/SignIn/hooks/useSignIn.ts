import { useNavigate } from "react-router-dom";
import {
  setToken,
  useAppDispatch,
} from "../../../store";

export function useSignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function goToSignUp() {
    navigate("/signup");
  }

  function goToDashboard() {
    navigate("/", { replace: true });
  }

  function handleSignInSuccess() {
    dispatch(setToken(`123`));
  }

  return {
    goToSignUp,
    goToDashboard,
    handleSignInSuccess,
  };
}
