import { useEffect } from "react";
import { useAppSelector } from "../store";
import { useNavigate } from "react-router";

export function useAuth() {
  const token = useAppSelector(
    (state) => state.auth.token
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      navigate("/signin", { replace: true });
    }
  }, [navigate, token]);
}
