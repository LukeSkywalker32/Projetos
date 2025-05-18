import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify/unstyled";
import AppProvider from "./hooks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="colored" transition={Zoom} />
    </AppProvider>
  </StrictMode>
);
