import axios from "axios";

export const instanceMovies = axios.create({
  baseURL: import.meta.env.VITE_MOVIES_BASE_URL,
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${
      import.meta.env.VITE_MOVIES_TOKEN
    }`,
  },
});
