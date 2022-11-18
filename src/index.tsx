import ReactDOM from "react-dom";
import App from "./App";
import "./scss/css/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { setupStore } from "./RTK/store/store";
import { store } from "./RTK/store";

// const store = setupStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
