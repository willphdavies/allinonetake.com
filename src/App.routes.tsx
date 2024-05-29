import { RouterProvider, Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "./pages";
import { DefaultTemplate } from "./templates";
import { Session } from "./pages/Session";
import { Search } from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <DefaultTemplate>
        <Home />
      </DefaultTemplate>
    ),
  },
  {
    path: "/search",
    element: (
      <DefaultTemplate>
        <Search />
      </DefaultTemplate>
    )
  },
  {
    path: "/session/:year/:month/:day",
    element: (
      <DefaultTemplate>
        <Session />
      </DefaultTemplate>
    ),
  },
  {
    path: "/about",
    element: (
      <DefaultTemplate>
        <About />
      </DefaultTemplate>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
export function AppRoutes() {
  return <RouterProvider router={router} />;
}
