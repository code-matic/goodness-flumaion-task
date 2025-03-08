import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { generalRoutes } from "./lib/routes";
import AppLayout from "./components/layouts/AppLayout";

export const router = createBrowserRouter([
  {
    path: generalRoutes.home,
    element: <AppLayout><Home /></AppLayout>,
  },
]);
