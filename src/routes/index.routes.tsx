import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import {
  Dashboard,
  Home,
  NotFound,
  Results,
  Search,
  SignIn,
  SignUp,
} from "../pages";

const routes = [
  <Route path="/signin" element={<SignIn />} />,
  <Route path="/" element={<Dashboard />} />,
  <Route path="/home" element={<Home />} />,
  <Route path="/search" element={<Search />} />,
  <Route path="/results" element={<Results />} />,
  <Route path="/signup" element={<SignUp />} />,
  <Route path="*" element={<NotFound />} />,
];

const router = createBrowserRouter(
  createRoutesFromElements(routes)
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
