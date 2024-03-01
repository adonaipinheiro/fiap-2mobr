import { Button } from "../../components";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <Container>
      <h1>#404</h1>
      <strong>Página não encontrada</strong>
      <Button onClick={goBack} text="Voltar" />
    </Container>
  );
}
