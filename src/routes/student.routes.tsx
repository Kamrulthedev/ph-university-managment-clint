import StudentDashboard from "../pages/Student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    name: "Student Management",
    children: [
      {
        name: "Offrd Course",
        path: "create-admin",
        element: '',
      },
    ],
  },
];
