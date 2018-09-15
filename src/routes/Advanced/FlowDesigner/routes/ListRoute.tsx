import React, { Component } from "react";
import { Card, Table, Button } from "antd";
import { Link } from "react-router-dom";
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
    title: "流程编码",
    dataIndex: "code",
    key: "code"
  },
  {
    title: "流程名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "流程版本",
    dataIndex: "version",
    key: "version"
  },
  {
    title: "流程状态",
    dataIndex: "state",
    key: "state"
  },
  {
    title: "运行中工单",
    dataIndex: "runningOrder",
    key: "runningOrder"
  },
  {
    title: "创建人",
    dataIndex: "createdBy",
    key: "createdBy"
  },
  {
    title: "更新时间",
    dataIndex: "updatedAt",
    key: "updatedAt"
  }
];
export class ListRoute extends Component {
  render() {
    return (
      <Card>
        <Link to="/sys/flow-designer/create">
          <Button type="primary">新增流程</Button>
        </Link>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    );
  }
}

export default ListRoute;
