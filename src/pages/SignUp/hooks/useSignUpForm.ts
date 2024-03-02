import { toast } from "react-toastify";
import { useSignUp } from ".";
import * as Yup from "yup";

export function useSignUpForm() {
  const { goToDashboard } = useSignUp();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string().required(
      "Campo obrigatório"
    ),
    email: Yup.string()
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(6, "Senha curta demais"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "As senhas não são iguais"
      )
      .required("Campo obrigatório"),
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
      const users: [typeof initialValues] =
        usersFromStorage
          ? JSON.parse(usersFromStorage)
          : [];

      if (users.length > 0) {
        const user = users.find(
          (user: typeof initialValues) =>
            user.email === values.email
        );

        if (user) {
          toast.warning("E-mail já em uso");
        } else {
          users.push(values);
          localStorage.setItem(
            "users",
            JSON.stringify(users)
          );
          toast.success(
            "Cdastro realizado com sucesso"
          );
          goToDashboard();
        }
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([values])
        );
        toast.success(
          "Cdastro realizado com sucesso"
        );
        goToDashboard();
      }

      setSubmitting(false);
    }, 500);
  }

  return {
    initialValues,
    signupSchema,
    submit,
  };
}
