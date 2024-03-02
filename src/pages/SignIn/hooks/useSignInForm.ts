import * as Yup from "yup";
import { useSignIn } from ".";
import { useSignUpForm } from "../../SignUp/hooks";
import { toast } from "react-toastify";

export function useSignInForm() {
  const signUpHook = useSignUpForm();
  const { goToDashboard } = useSignIn();

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
    setTimeout(() => {
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

      if (user) {
        if (user.password === values.password) {
          toast.success("Bem-vindo!");
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
    }, 500);
  }

  return {
    initialValues,
    signinSchema,
    submit,
  };
}
