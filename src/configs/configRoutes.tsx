import DefaultLayout from "@/layouts/DefaultLayout";
import AuthPage from "@/pages/Auth";
import HomePage from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ProductPage from "@/pages/Product";
import type { RouteObject } from "react-router";

export const configRoutes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
