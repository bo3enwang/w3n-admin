import React, { Component } from "react";
import { Table, Button } from "antd";
import styled from "styled-components";

const StyledDeptTable = styled.div`
  .operator {
    text-align: right;
    margin-bottom: 15px;
  }
`;

export class DeptTable extends Component {
  render() {
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];

    const columns = [
      {
        title: "部门名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "描述",
        dataIndex: "description",
        key: "description"
      },
      {
        title: "单位",
        dataIndex: "org",
        key: "org"
      },
      {
        title: "操作",
        dataIndex: "operator",
        key: "operator"
      }
    ];
    return (
      <div>
        <StyledDeptTable>
          <div className="operator">
            <Button type="primary" icon="usergroup-add">
              新建部门
            </Button>
          </div>
        </StyledDeptTable>
        <Table size="middle" bordered={true} dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default DeptTable;
