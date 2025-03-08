import { createBrowserRouter} from  "react-router-dom";
import Home from "./pages/Home/Index.jsx";
import ListUsers from "./pages/ListUsers/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/usuarios-cadastrados",
    element: <ListUsers />,
  }


  ]);

  export default router;