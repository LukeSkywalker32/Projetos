import { createBrowserRouter } from "react-router";
import { Login } from "../containers/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);