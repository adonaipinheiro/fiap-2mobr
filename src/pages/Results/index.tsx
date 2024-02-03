import { ReposList } from "../../components";
import { useResults } from "./hooks/useResults";
import {
  Container,
  Content,
  UserInfoArea,
  UserInfoContent,
} from "./styles";

export function Results() {
  const { user, repos } = useResults();

  if (!user) {
    return <div>Não tem usuário</div>;
  }

  return (
    <Container>
      <Content>
        <UserInfoArea>
          <img
            src={user.avatar_url}
            alt="Avatar"
          />
          <UserInfoContent>
            <strong>{user.name}</strong>
            <span>{user.login}</span>
            <span>
              Nº Repos: {user.public_repos}
            </span>
            <span>{user.bio}</span>
            <a
              href={user.html_url}
              target="_blank"
            >
              {user.html_url}
            </a>
          </UserInfoContent>
        </UserInfoArea>
        <ReposList repos={repos} />
      </Content>
    </Container>
  );
}
