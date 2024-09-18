import { createBrowserRouter } from "react-router-dom";
import Login from "./page/login";
import Dashboard from "./page/admin-panel";
import ProtectedRoute from "./components/protected-route";
import CreateUser from "./components/user-create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute element={<Dashboard />} />,
  },
  {
    path: "/dashboard/new",
    element: <CreateUser />,
  },
]);
