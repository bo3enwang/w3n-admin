import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import { Avatar, Dropdown, Menu, Icon } from "antd";
import avatarImg from "./avatar.jpg";

const StyledTopHeader = styled.div`
  background: #297bae;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  height: 60px;
  .logo {
    padding: 15px 0;
    > img {
      height: 30px;
      width: auto;
      vertical-align: middle;
    }
    > span {
      margin-left: 15px;
      font-size: 20px;
      font-weight: 600;
      vertical-align: middle;
      color: #fff;
    }
  }
  .header-right {
    display: flex;
    .user-info {
      padding: 15px 10px;
      &:hover {
        cursor: pointer;
        background: rgba(0, 40, 100, 0.12);
      }
      > .username {
        color: #fff;
        margin-left: 16px;
        vertical-align: middle;
      }
    }
  }
`;

export class TopHeader extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Icon type="user" theme="outlined" />
          个人中心
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="setting" theme="outlined" />
          资料设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <Icon type="logout" theme="outlined" />
          登出
        </Menu.Item>
      </Menu>
    );
    return (
      <StyledTopHeader>
        <div className="logo">
          <img src={logo} alt="He flash" />
          <span>Helium Flash</span>
        </div>

        <div className="header-right">
          <Dropdown overlay={menu} trigger={["click"]}>
            <div className="user-info">
              <Avatar src={avatarImg} />
              <span className="username">你好! 管理员</span>
            </div>
          </Dropdown>
        </div>
      </StyledTopHeader>
    );
  }
}

export default TopHeader;
