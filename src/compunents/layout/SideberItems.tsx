import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sideberItemsGenerators } from "../../utils/sideBerItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const UserRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const SideberItems = () => {

  const role = "faculty";
  let sideberItems;

  switch (role) {
    case UserRole.ADMIN:
      sideberItems = sideberItemsGenerators(adminPaths, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sideberItems = sideberItemsGenerators(facultyPaths, UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
      sideberItems = sideberItemsGenerators(studentPaths, UserRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH UNIVERSITY</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideberItems}
      />
    </Sider>
  );
};

export default SideberItems;
