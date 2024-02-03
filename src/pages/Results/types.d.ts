export type GithubUser = {
  name: string;
  login: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
};

export type GithubUserRepos = {
  name: string;
  language: string;
  html_url: string;
  id: number;
};
