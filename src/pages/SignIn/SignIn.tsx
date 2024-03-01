import { Formik } from "formik";

import {
  Button,
  DefaultContainer,
  Input,
} from "../../components";
import { Content, Form } from "./styles";
import {
  useSignInForm,
  useSignIn,
} from "./hooks";

export function SignIn() {
  const { goToSignUp } = useSignIn();
  const { initialValues, submit, signinSchema } =
    useSignInForm();

  return (
    <DefaultContainer>
      <Content>
        <h1>FIAP</h1>
        <strong>Educação que transforma</strong>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) =>
            submit({ values, setSubmitting })
          }
          validationSchema={signinSchema}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                value={values.email}
                error={errors.email}
                onChange={handleChange("email")}
                label="E-mail"
                type="email"
                placeholder="Digite aqui seu e-mail"
              />
              <Input
                value={values.password}
                error={errors.password}
                onChange={handleChange(
                  "password"
                )}
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
              />
              <Button
                text="Entrar"
                type="submit"
                loading={isSubmitting}
              />
              <span>
                Não possui cadastro?{" "}
                <u onClick={goToSignUp}>
                  Clique aqui
                </u>
              </span>
            </Form>
          )}
        </Formik>
      </Content>
    </DefaultContainer>
  );
}
