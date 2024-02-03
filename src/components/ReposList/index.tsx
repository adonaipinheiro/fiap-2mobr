import type { GithubUserRepos } from "../../pages/Results/types";
import { Container, Repo } from "./styles";

interface ReposListProps {
  repos: GithubUserRepos[];
}

function ReposList({ repos }: ReposListProps) {
  return (
    <Container>
      {repos.map((repo) => (
        <Repo key={repo.id}>
          <strong>{repo.name}</strong>
          <span>{repo.language}</span>
          <a href={repo.html_url} target="_blank">
            {repo.html_url}
          </a>
        </Repo>
      ))}
    </Container>
  );
}

export { ReposList };
