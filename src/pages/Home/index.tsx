import { useHome } from "./hooks/useHome";
import { Button } from "../../components";
import { Container } from "./styles";

function Home() {
  const { handleGoToSearch } = useHome();

  return (
    <Container>
      <h1>FIAP</h1>
      <h2>Educação que transforma</h2>
      <Button
        text="Buscar usuário do Github"
        onClick={handleGoToSearch}
      />
    </Container>
  );
}

export { Home };
