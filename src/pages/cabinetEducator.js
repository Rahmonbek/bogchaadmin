import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
// import NavbarKabinet from "./NavbarKabinet";
import Kids from "./kids";
import Rahbarlar from "./Rahbarlar";
import Teachers1 from "./Teachers1";
import EducatorYangiliklar from "./educatorYangiliklar";
import Educatortadbirlar from "./Educatortadbirlar";

import "../App.css";
import styles from "../css/navbarkids.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  HistoryOutlined,
  SmileOutlined,
} from "@ant-design/icons";
// import Rahbariyat from "./Rahbariyat";
import Cabinet from "./Cabinet";
export default class CabinetEducator extends Component {
  state = {
    collapsed: false,
    loader: true,
    stl: null,
  };
  // style = () => {
  //   var stl = this.state.stl;
  //   if (stl == null) {
  //     document.querySelector("dash").style.color = "#FF8080";
  //     document.querySelector("dash").style.backgroundColor = "white";
  //     this.setState({
  //       stl: "1",
  //     });
  //   } else {
  //     document.querySelector("dash").style.color = "white";
  //   }
  // };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <div>
        {this.state.loader ? (
          <div className={styles.loader}>
            <PacmanLoader
              size={20}
              color={"#FF8080"}
              loading={this.state.loader}
            />
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BrowserRouter>
                <div
                  className={
                    this.state.collapsed ? styles.collapsed1 : styles.collapsed2
                  }
                >
                  <Button
                    type="primary"
                    onClick={this.toggleCollapsed}
                    style={{
                      marginBottom: 16,
                      marginTop: 10,
                      backgroundColor: "transparent",
                      border: "1px solid white",
                    }}
                  >
                    {React.createElement(
                      this.state.collapsed
                        ? MenuUnfoldOutlined
                        : MenuFoldOutlined
                    )}
                  </Button>
                  <Menu
                    style={{ backgroundColor: "#ff8080" }}
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    className="Linkdashboard"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                  >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                      <NavLink
                        to="/educator"
                        className="akt"
                        style={{
                          color: "#FF8080",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        <span className="dash" style={{ color: "white" }}>
                          {" "}
                          Dashboard
                        </span>
                      </NavLink>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      icon={<MailOutlined />}
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "16px",
                        backgroundColor: "#FF8080",
                      }}
                      title="Xodimlar"
                    >
                      <Menu.Item key="5">
                        <NavLink
                          to="/educator/rahbarlar"
                          style={{
                            color: "#FF8080",
                            backgroundColor: "#FF8080",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Rahbarlar
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item
                        style={{ backgroundColor: "white", color: "#FF8080" }}
                        key="6"
                      >
                        <NavLink
                          to="/educator/tarbiyachilar"
                          style={{
                            color: "#FF8080",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Tarbiyachilar
                        </NavLink>
                      </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                      <NavLink
                        to="/educator/kids"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        O'quvchilar
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<HistoryOutlined />}>
                      <NavLink
                        to="/educator/yangiliklar"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        Yangiliklar
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SmileOutlined />}>
                      <NavLink
                        to="/educator/tadbirlar"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        Tadbirlar
                      </NavLink>
                    </Menu.Item>
                  </Menu>
                </div>
                <Switch>
                  <Route exact path="/educator">
                    <Cabinet />
                  </Route>
                  <Route exact path="/educator/rahbarlar">
                    <Rahbarlar />
                  </Route>
                  <Route exact path="/educator/tarbiyachilar">
                    <Teachers1 />
                  </Route>
                  <Route exact path="/educator/kids">
                    <Kids />
                  </Route>
                  <Route exact path="/educator/yangiliklar">
                    <EducatorYangiliklar />
                  </Route>
                  <Route exact path="/educator/tadbirlar">
                    <Educatortadbirlar />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        )}
      </div>
    );
  }
}
