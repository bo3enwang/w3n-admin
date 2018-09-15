import React, { Component, Fragment } from "react";
import { Row, Col, Card } from "antd";
import styled from "styled-components";

const StyledWorkplace = styled.div`
  .framework-description {
    padding: 10px 20px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
  }
`;

export class Workplace extends Component {
  render() {
    return (
      <Fragment>
        <Card style={{ marginBottom: 16 }}>
          <StyledWorkplace>
            <h1>w3n 后台主题UI框架</h1>
            <Row gutter={16}>
              <Col span={8}>
                <p>w3n-admin 基于 React，使用了蚂蚁金服的 Ant design 为主要组件样式框架</p>
                <p>
                  框架可以用于所有的Web应用程序，如网站管理后台，网站会员中心，CMS，CRM，OA等等，当然，您也可以对她进行深度定制，以做出更强系统。
                </p>
                <p>当前版本：v4.1.0</p>
              </Col>
              <Col span={16}>
                <p>系统集成了大量第三方组件以展现 React 的强大能力，以及优秀的生态园</p>
              </Col>
            </Row>
          </StyledWorkplace>
        </Card>
        <Row gutter={16}>
          <Col span={16}>
            <Card title="更新日志">更新日志</Card>
          </Col>
          <Col span={8}>
            <Card title="联系方式">联系方式</Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Workplace;
