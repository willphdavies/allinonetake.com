import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "./pages";
import { DefaultTemplate } from "./templates";

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <DefaultTemplate><Home/></DefaultTemplate>
    },
    {
      path: '/about',
      element: <DefaultTemplate><About /></DefaultTemplate>
    }
  ]
);
export function AppRoutes() {
  return (
    <RouterProvider router={router} />
  );
}