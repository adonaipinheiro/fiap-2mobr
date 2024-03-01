import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import {
  SignIn,
  NotFound,
  SignUp,
  Dashboard,
} from "../pages";

const routes = [
  <Route path="/" element={<Dashboard />} />,
  <Route path="/signin" element={<SignIn />} />,
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
