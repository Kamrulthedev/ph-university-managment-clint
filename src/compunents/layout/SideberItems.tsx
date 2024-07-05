import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sideberItemsGenerators } from "../../utils/sideBerItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";

const SideberItems = () => {
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
          items={sideberItemsGenerators(adminPaths, "admin")}
        />
      </Sider>
    );
};

export default SideberItems;