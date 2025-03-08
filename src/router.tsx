import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { generalRoutes } from "./lib/routes";
import AppLayout from "./components/layouts/AppLayout";
import Task from "./pages/Task";

export const router = createBrowserRouter([
  {
    path: generalRoutes.home,
    element: <AppLayout><Home /></AppLayout>,
  },
  {
    path: generalRoutes.task,
    element: <AppLayout><Task /></AppLayout>,
  },
]);
