import axios from "axios";

export const instanceMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${
      import.meta.env.VITE_TOKEN
    }`,
  },
});
