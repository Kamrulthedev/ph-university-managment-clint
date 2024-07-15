import AcademicDepertment from "../pages/Admin/AcademicManagment/AcademicDepertment";
import AcademicFaculty from "../pages/Admin/AcademicManagment/AcademicFaculty";
import AcademicSemester from "../pages/Admin/AcademicManagment/AcademicSemester";
import CreateAcademicDepertment from "../pages/Admin/AcademicManagment/CreateAcademicDepertment";
import CreateAcademicFaculty from "../pages/Admin/AcademicManagment/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/Admin/AcademicManagment/CreateAcademicSemester";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStaudent from "../pages/Admin/CreateStaudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Managment",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. Facutly",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic Facutly",
        path: "academic-faculty",
        element:<AcademicFaculty></AcademicFaculty>,
      },
      {
        name: "Create A. Depertment",
        path: "create-academic-depertment",
        element: <CreateAcademicDepertment></CreateAcademicDepertment>,
      },
      {
        name: "Academic Depertment",
        path: "academic-depertment",
        element: <AcademicDepertment></AcademicDepertment>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Amdin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Facutly",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStaudent></CreateStaudent>,
      },
    ],
  },
];
