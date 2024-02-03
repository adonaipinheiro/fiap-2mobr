import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import {
  Home,
  NotFound,
  Results,
  Search,
} from "../pages";

const routes = [
  <Route path="/" element={<Home />} />,
  <Route path="/search" element={<Search />} />,
  <Route path="/results" element={<Results />} />,
  <Route path="*" element={<NotFound />} />,
];

const router = createBrowserRouter(
  createRoutesFromElements(routes)
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
