import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify/unstyled";
import AppProvider from "./hooks";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "./config/stripeConfig";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="colored" transition={Zoom} />
    </AppProvider>
  </StrictMode>
);
