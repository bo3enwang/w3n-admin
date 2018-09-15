import React, { Component } from "react";
import { Menu, Icon } from "antd";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import * as Routes from "routes";

const SubMenu = Menu.SubMenu;

const StyleNavHeader = styled.div`
  background: #fff;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  text-align: center;

  .nav-container {
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
    width: 100%;
    padding-right: 6px;
    padding-left: 6px;
    margin-right: auto;
    margin-left: auto;
    > .ant-menu-horizontal {
      border-bottom: 0;
    }
  }
`;

export class NavHeader extends Component {
  menus;
  state: { openKeys: string[] } = {
    openKeys: []
  };
  constructor(props: any) {
    super(props);
    this.menus = [...Routes.menuData];
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props)
    };
  }

  getDefaultCollapsedSubMenus(props: any) {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)];
    currentMenuSelectedKeys.splice(-1, 1);
    if (currentMenuSelectedKeys.length === 0) {
      return ["dashboard"];
    }
    return currentMenuSelectedKeys;
  }
  getNavMenuItems(menusData: Routes.IMenu[], parentPath: string = "") {
    if (!menusData) {
      return [];
    }
    return menusData.map(item => {
      if (!item.name || (item.path && item.path.indexOf(":") > -1)) {
        return null;
      }
      let itemPath;
      if (item.path.indexOf("http") === 0) {
        itemPath = item.path;
      } else {
        itemPath = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
      }
      if (item.children && item.children.some(child => !!child.name)) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              ) : (
                item.name
              )
            }
            key={item.key || item.path}
          >
            {this.getNavMenuItems(item.children, itemPath)}
          </SubMenu>
        );
      }
      const icon = item.icon && <Icon type={item.icon} />;
      return (
        <Menu.Item key={item.key || item.path}>
          <Link to={itemPath}>
            {icon}
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      );
    });
  }

  getCurrentMenuSelectedKeys(props?: any) {
    const {
      location: { pathname }
    } = props || this.props;
    const keys = pathname.split("/").slice(1);
    if (keys.length === 1 && keys[0] === "") {
      return [this.menus[0].key];
    }
    return keys;
  }

  handleOpenChange = openKeys => {
    const lastOpenKey = openKeys[openKeys.length - 1];
    const isMainMenu = this.menus.some(item => lastOpenKey && (item.key === lastOpenKey || item.path === lastOpenKey));
    this.setState({
      openKeys: isMainMenu ? [lastOpenKey] : [...openKeys]
    });
  };

  render() {
    return (
      <StyleNavHeader>
        <div className="nav-container">
          <Menu mode="horizontal" onOpenChange={this.handleOpenChange} selectedKeys={this.getCurrentMenuSelectedKeys()}>
            {this.getNavMenuItems(this.menus)}
          </Menu>
        </div>
      </StyleNavHeader>
    );
  }
}

export default withRouter(NavHeader);
