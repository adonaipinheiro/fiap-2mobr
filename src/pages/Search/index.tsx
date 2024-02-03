import { useSearch } from "./hooks/useSearch";
import { Button } from "../../components";
import { Container, SearchArea } from "./styles";

function Search() {
  const { username, handleInput, throwUser } =
    useSearch();

  return (
    <Container>
      <SearchArea>
        <h1>FIAP</h1>
        <h2>Educação que transforma</h2>
        <input
          value={username}
          onChange={handleInput}
          type="text"
          name="username"
          id="username"
          placeholder="Digite o nome do usuário"
        />
        <Button
          text="Buscar"
          onClick={throwUser}
        />
      </SearchArea>
    </Container>
  );
}

export { Search };
