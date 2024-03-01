import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useUserStore } from "../../hooks/useUserStore";
import {
  GetPopularMovies,
  MoviesServices,
} from "../../services/features/Movies";
import { useService } from "../../services/useService";

export function Dashboard() {
  const user = useUserStore(
    (state) => state.user
  );
  useAuth();

  const { callRequest, data, error, loading } =
    useService<GetPopularMovies>(
      MoviesServices.getPopularMovies()
    );

  useEffect(() => {
    callRequest();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <span>Dashboard</span>
      <span>{user.name}</span>
      <span>{loading}</span>
      {data &&
        data.results.map((movie, id) => (
          <>
            <div key={id}>{movie.id}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </>
        ))}
    </div>
  );
}
