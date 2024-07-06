import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import Login from "../pages/Login";
import Registation from "../pages/Registation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routesGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registation",
    element: <Registation></Registation>,
  },
]);

export default router;
