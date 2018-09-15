import React, { Component } from "react";
import BpmnBoard from "components/BpmnBoard";
import { Card } from "antd";
export class EditorRoute extends Component {
  render() {
    return (
      <Card>
        <BpmnBoard />
      </Card>
    );
  }
}

export default EditorRoute;
