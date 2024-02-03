import { ToastContainer } from "react-toastify";
import { Router } from "./routes/index.routes";
import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Router />
    </>
  );
}

export { App };
