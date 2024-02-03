import { useEffect, useState } from "react";
import type {
  GithubUser,
  GithubUserRepos,
} from "../types";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export function useResults() {
  const [user, setUser] = useState<GithubUser>();
  const [repos, setRepos] = useState<
    GithubUserRepos[]
  >([]);
  const location = useLocation();
  const githubUser = location.state.githubUser;

  function fetchGithubUserByLocation() {
    if (!githubUser) return;

    fetch(
      `https://api.github.com/users/${githubUser}`
    )
      .then((r) => r.json())
      .then((r: GithubUser) => {
        setUser(r);
        toast.success(
          "Maravilha! Conseguimos achar este usuário no Github!",
          {
            position: "top-right",
          }
        );
        fetchUserRepos();
      })
      .catch(() => {
        toast.error(
          "Opa! Algo não deu certo... Tente novmante!"
        );
      });
  }

  function fetchUserRepos() {
    fetch(
      `https://api.github.com/users/${githubUser}/repos`
    )
      .then((r) => r.json())
      .then((r: GithubUserRepos[]) => {
        setRepos(r);
      });
  }

  useEffect(() => {
    fetchGithubUserByLocation();
  }, []);

  return {
    user,
    repos,
  };
}
