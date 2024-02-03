import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";
import { UserName } from "../types";

// Hook Pattern
export function useHome() {
  const [name, setName] =
    useState<UserName>("João");
  const [email, setEmail] = useState<string>("");

  function handleName() {
    setName("Adonai");
  }

  function handleInput(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setEmail(event.target.value);
  }

  // ComponentDidMount
  useEffect(() => {
    console.log("Oi, fui chamado");
  }, []);

  // ComponentWillUnmount
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Oi, não esquece de mim");
    }, 100000);

    return () => {
      clearInterval(interval);
      return;
    };
  }, []);

  // Efeitos colaterais
  useEffect(() => {
    console.log(name);
  }, [name]);

  return {
    name,
    handleName,
    email,
    handleInput,
  };
}
