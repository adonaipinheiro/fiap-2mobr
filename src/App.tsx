import { ToastContainer } from "react-toastify";
import { Router } from "./routes/index.routes";
import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer />
      <Router />
    </Provider>
  );
}

export { App };
