import { ChangeEvent, useState } from "react";
import { UserName } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Hook Pattern
export function useSearch() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState<UserName>("");

  function handleInput(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setUsername(event.target.value);
  }

  function throwUser() {
    if (username === "") {
      toast.warn(
        "Atenção! O campo não pode estar vazio",
        {
          position: "top-right",
        }
      );
    } else if (
      username.toLowerCase().split(" ")[1]
    ) {
      toast.warn(
        "Por favor, digite um usuário válido",
        {
          position: "top-right",
        }
      );
    } else {
      navigate("/results", {
        state: {
          githubUser: username,
        },
      });
    }
  }

  return {
    username,
    handleInput,
    throwUser,
  };
}
