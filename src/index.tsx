import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyle";
import store from "./core/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
);
