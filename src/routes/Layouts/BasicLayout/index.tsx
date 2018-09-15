import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledBasicLayout = styled.div`
  .grid-block {
    background: rgba(0, 160, 233, 0.7);
    text-align: center;
    padding: 30px 0;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export class BasicLayout extends Component {
  render() {
    return (
      <StyledBasicLayout>
        <Row style={{ marginBottom: 16 }}>
          <Col span={24}>
            <div className="grid-block">基础菜单区</div>
          </Col>
        </Row>
        <Row style={{ marginBottom: 16 }}>
          <Col span={24}>
            <div style={{ height: 400 }} className="grid-block">
              数据展现区
            </div>
          </Col>
        </Row>
      </StyledBasicLayout>
    );
  }
}

export default BasicLayout;
