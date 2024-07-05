const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Amdin",
        path: "create-admin",
        element: "CREATE-AMDIN",
      },
      {
        name: "Create Facutly",
        path: "create-faculty",
        element: "CREATE-FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE-STUDENT",
      },
    ],
  },
];

const newAeery = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children:item.children.map(child =>({
        key: child.name,
        label: 'NAVLINK'
      }))
    });
  }
  return acc;
}, []);

console.log(JSON.stringify(newAeery));
