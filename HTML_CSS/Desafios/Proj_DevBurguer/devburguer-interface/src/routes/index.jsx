import { createBrowserRouter } from "react-router";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
]);
