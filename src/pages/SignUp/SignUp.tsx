import { Formik } from "formik";

import {
  Button,
  DefaultContainer,
  Input,
} from "../../components";
import { Content, Form } from "./styles";
import {
  useSignUp,
  useSignUpForm,
} from "./hooks";

export function SignUp() {
  const { goToSignIn } = useSignUp();
  const { initialValues, submit, signupSchema } =
    useSignUpForm();

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
          validationSchema={signupSchema}
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
                value={values.name}
                error={errors.name}
                onChange={handleChange("name")}
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
              />
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
              <Input
                value={values.confirmPass}
                error={errors.confirmPass}
                onChange={handleChange(
                  "confirmPass"
                )}
                label="Cofirmar senha"
                type="password"
                placeholder="Digite aqui sua senha"
              />
              <Button
                text="Cadastrar"
                type="submit"
                loading={isSubmitting}
              />
              <span>
                Já possui cadastro?{" "}
                <u onClick={goToSignIn}>
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
