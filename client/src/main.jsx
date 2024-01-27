import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import { AppRouter } from "./components/AppRouter.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
