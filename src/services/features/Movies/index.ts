import { instanceMovies } from "../../instances";
import type { GetPopularMoviesResponse } from "./types";

const queryParamsDefault =
  "?language=pt-BR&page=1";

export const MoviesServices = {
  getPopularMovies: async () => {
    return await instanceMovies
      .get<GetPopularMoviesResponse>(
        `movie/popular${queryParamsDefault}`
      )
      .then((r) => r.data);
  },
};
