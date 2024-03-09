import { useUserStore } from "../../hooks";
import { useAppSelector } from "../../store";
import {
  ImageListItem,
  ImageList,
  ImageListItemBar,
} from "@mui/material";
import { useGetPopularMoviesQuery } from "../../store/reducers/Movies/api/apiMoviesSlice";

export function Dashboard() {
  const token = useAppSelector(
    (state) => state.auth.token
  );
  const user = useUserStore(
    (state) => state.user
  );
  // const { callRequest, data, loading } =
  //   useService(MoviesServices.getPopularMovies());

  // if (loading) {
  //   <div>Carregando...</div>;
  // }

  // useEffect(() => {
  //   callRequest();
  // }, []);

  const { data, isLoading, error } =
    useGetPopularMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ops, deu erro</div>;
  }

  return (
    <div>
      <span>Dashboard</span>
      <span>TOKEN: {token}</span>
      <span>USER: {user.name}</span>
      {data && (
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          cols={4}
          rowHeight={500}
        >
          {data.results.map((movie, id) => (
            <ImageListItem key={id}>
              {movie.id}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <ImageListItemBar
                position="below"
                title={movie.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
}
