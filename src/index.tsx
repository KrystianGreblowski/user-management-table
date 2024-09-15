import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyle";
import store from "./core/store";
import { RouterProvider } from "react-router";
import { router } from "./core/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
);
