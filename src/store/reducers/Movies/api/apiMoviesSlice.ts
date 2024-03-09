import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import type { GetPopularMoviesResponse } from "./types";

const queryParamsDefault =
  "?language=pt-BR&page=1";

export const apiMoviesSlice = createApi({
  reducerPath: "apiMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MOVIES_BASE_URL,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${
        import.meta.env.VITE_MOVIES_TOKEN
      }`,
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<
      GetPopularMoviesResponse,
      void
    >({
      query: () =>
        `movie/popular${queryParamsDefault}`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } =
  apiMoviesSlice;
