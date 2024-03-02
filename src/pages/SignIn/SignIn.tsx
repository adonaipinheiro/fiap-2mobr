import { Formik } from "formik";
import {
  Button,
  DefaultContainer,
  Input,
} from "../../components";
import {
  useSignIn,
  useSignInForm,
} from "./hooks";
import { Content, Form } from "./styles";

export function SignIn() {
  const { goToSignUp } = useSignIn();
  const { initialValues, signinSchema, submit } =
    useSignInForm();

  return (
    <DefaultContainer>
      <Content>
        <h1>FIAP</h1>
        <strong>Educação que transforma!</strong>
        <Formik
          initialValues={initialValues}
          validationSchema={signinSchema}
          onSubmit={(values, { setSubmitting }) =>
            submit({
              values,
              setSubmitting,
            })
          }
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
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
