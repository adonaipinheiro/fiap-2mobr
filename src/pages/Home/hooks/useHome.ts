import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Hook Pattern
export function useHome() {
  const navigate = useNavigate();

  function handleGoToSearch() {
    navigate("/search");
    toast.success(
      "Sucesso! Pronto para pesquisar",
      {
        position: "top-right",
      }
    );
  }

  return {
    handleGoToSearch,
  };
}
