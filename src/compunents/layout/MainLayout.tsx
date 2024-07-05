import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideberItems from "./SideberItems";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideberItems></SideberItems>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Kamrul ©{new Date().getFullYear()} Created by KH B.D.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
