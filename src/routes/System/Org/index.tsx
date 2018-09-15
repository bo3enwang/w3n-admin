import React, { Component } from "react";
import { Row, Col, Card, Tree, Button } from "antd";
import service from "utils/request";
import styled from "styled-components";
import DeptTable from "./components/DeptTable";

const TreeNode = Tree.TreeNode;

const StyledTree = styled.div`
  .ant-tree-node-content-wrapper {
    width: calc(100% - 18px);
  }
  .customer-title {
    display: flex;
    justify-content: space-between;
    .operator {
      margin-left: 7px;
      /* color: #020200;
      transition: all 0.3s; */
      :hover {
        /* font-size: 16px;
        color: #fff;
        cursor: pointer; */
      }
    }
  }
`;

export class Org extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      orgData: []
    };
  }
  componentDidMount = () => {
    service.get("/system/org").then(({ status, data }) => {
      this.setState({ orgData: data });
    });
  };
  customerTitle = node => (
    <div className="customer-title">
      <div>{node.name}</div>
      <div className="operator">
        <Button icon="edit" size="small" title="编辑部门" />
        <Button icon="plus" size="small" title="新增子部门" />
      </div>
    </div>
  );

  loopNode = node => {
    if (node.children && node.children.length) {
      return (
        <TreeNode title={this.customerTitle(node)} key={node.id}>
          {node.children.map(child => this.loopNode(child))}
        </TreeNode>
      );
    } else {
      return <TreeNode title={this.customerTitle(node)} key={node.id} />;
    }
  };

  render() {
    return (
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <StyledTree>
              <Tree>{this.state.orgData.map(node => this.loopNode(node))}</Tree>
            </StyledTree>
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <DeptTable />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Org;
