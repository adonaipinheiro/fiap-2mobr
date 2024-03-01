import { toast } from "react-toastify";
import * as Yup from "yup";
import { useSignUpForm } from "../../SignUp/hooks";
import { useSignIn } from ".";
import { useUserStore } from "../../../hooks/useUserStore";

export function useSignInForm() {
  const signUpHook = useSignUpForm();
  const setUser = useUserStore(
    (state) => state.setUser
  );
  const { handleSignInSuccess, goToDashboard } =
    useSignIn();

  const initialValues = {
    email: "",
    password: "",
  };

  const signinSchema = Yup.object().shape({
    email: Yup.string()
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    password: Yup.string().required(
      "Campo obrigatório"
    ),
  });

  function submit({
    values,
    setSubmitting,
  }: {
    values: typeof initialValues;
    setSubmitting: (
      isSubmitting: boolean
    ) => void;
  }) {
    const usersFromStorage =
      localStorage.getItem("users");

    const usersJson: [
      typeof signUpHook.initialValues
    ] = usersFromStorage
      ? JSON.parse(usersFromStorage)
      : [];

    const user:
      | typeof signUpHook.initialValues
      | undefined = usersJson.find(
      (user) => user.email === values.email
    );

    setTimeout(() => {
      if (user) {
        if (user.password === values.password) {
          toast.success("Bem-vindo");
          setUser({
            name: user.name,
            email: user.email,
          });
          handleSignInSuccess();
          goToDashboard();
        } else {
          toast.error(
            "Usuário ou senha inválida"
          );
        }
      } else {
        toast.error("Usuário ou senha inválida");
      }

      setSubmitting(false);
    }, 400);
  }

  return {
    signinSchema,
    submit,
    initialValues,
  };
}
