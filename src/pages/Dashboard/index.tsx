import { useEffect } from "react";
import { useUserStore } from "../../hooks";
import {
  MoviesServices,
  useService,
} from "../../services";
import { useAppSelector } from "../../store";

export function Dashboard() {
  const token = useAppSelector(
    (state) => state.auth.token
  );
  const user = useUserStore(
    (state) => state.user
  );
  const { callRequest, data, loading } =
    useService(MoviesServices.getPopularMovies());

  if (loading) {
    <div>Carregando...</div>;
  }

  useEffect(() => {
    callRequest();
  }, []);

  return (
    <div>
      <span>Dashboard</span>
      <span>TOKEN: {token}</span>
      <span>USER: {user.name}</span>
      {data &&
        data.results.map((movie, id) => (
          <div key={id}>
            {movie.id}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
        ))}
    </div>
  );
}
