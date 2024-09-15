import { createHashRouter } from "react-router-dom";
import App from "./App";
import Error from "../common/Error";
import UsersDataTable from "../features/UsersDataTable";

export const router = createHashRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <UsersDataTable />,
      },
    ],
  },
]);
