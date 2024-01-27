import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "../pages/Main/Main";
import { PageWrapper } from "./PageWrapper";
import { Product } from "../pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper Component={<Main />} />,
  },
  {
    path: "/product",
    element: <PageWrapper Component={<Product />} />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
